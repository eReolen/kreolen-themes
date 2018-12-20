<?php

/**
 * @file
 */

/**
 * Implements hook_preprocess_page().
 */
function kreol_preprocess_page(&$variables) {
}

/**
 * Implements hook_preprocess_node().
 */
function kreol_preprocess_node(&$variables) {
  if (isset($variables['node'])) {
    $css_options = [
      'group' => CSS_THEME,
    ];
    $js_options = [
      'group' => JS_THEME,
    ];

    $tracking_url = kreol_build_url(current_path(), [
      'isbn' => '{{isbn}}',
      'action' => '{{action}}',
    ]);

    $node = $variables['node'];
    if ('kreol_campaign' === $node->type) {
      $player_url = kreol_build_url('https://play.pubhub.dk/lyttestation.html', [
        'i' => '{{isbn}}',
        's' => request_path(),
      ]);

      $audio_player_config = [
        'player_url' => $player_url,
        'tracking_url' => $tracking_url,
      ];
      drupal_add_js('var audio_player_config = ' . json_encode($audio_player_config) . ';', [
        'type' => 'inline',
      ]);
      $variables['campaign_audio_player'] = theme('campaign_audio_player');

      global $user;
      $wrapper = entity_metadata_wrapper('node', $node);
      if (0 === $user->uid && $wrapper->field_geofencing_origin->value() && $wrapper->field_geofencing_max_distance->value()) {
        $geofencing_config = [
          'origins' => array_map(function ($spec) {
            return [
              'coords' => [
                'latitude' => $spec['lat'],
                'longitude' => $spec['lng'],
              ],
            ];
          }, $wrapper->field_geofencing_origin->value()),
          'max_distance' => (int) $wrapper->field_geofencing_max_distance->value(),
        ];

        drupal_add_js('var geofencing_config = ' . json_encode($geofencing_config) . ';', [
          'type' => 'inline',
        ]);

        $variables['campaign_geofencing'] = theme('campaign_geofencing', [
          'header' => t('Accepter anmodning om at kende din lokation'),
          'lead' => t('For at få adgang til lydbøgerne skal du acceptere at vi må kende din lokation. Tryk på Accepter i den lille popup ved adresselinjen her i browseren.<br>Hvis du vælger at blokere kan du <b>ikke</b> få adgang.'),
          'buttons' => [
            'accept' => t('Accepter betingelserne og fortsæt'),
            'decline' => t('Nej tak, jeg ønkser ikke at lytte til gratis lydbøger'),
          ],
          'getting_location' => t('Henter din placering …'),
          'checking_location' => t('Tjekker din placering …'),
          'unknown_location' => t('Det var ikke muligt at finde din placering.'),
          'access_granted' => t('Velkommen. Du har nu adgang til lydbøgerne.'),
          'access_denied' => t('Ifølge din placering er du ikke på hospitalet.'),
          'geofencing_declined' => t('Ærgerligt. Du kan altid finde spændende e- og lydbøger på <a href="https://ereolen.dk">eReolen</a>.'),
          'footer' => t('Læs mere om hvorfor vi skal kende din lokation og hvordan vi håndterer dine data. <a href="http://www.ereolen.dk/datahåndtering">Sådan bruger vi dine data</a>'),
        ]);

        drupal_add_css(drupal_get_path('theme', 'kreol') . '/build/geofencing.css', $css_options);
        drupal_add_js(drupal_get_path('theme', 'kreol') . '/build/geofencing.js', $js_options);
      }
      else {
        drupal_add_css(drupal_get_path('theme', 'kreol') . '/build/kreol.css', $css_options);
        drupal_add_js(drupal_get_path('theme', 'kreol') . '/build/kreol.js', $js_options);
      }
    }
    elseif ('kreol_campaign_tv' === $node->type) {
      $audio_player_config = [
        'tracking_url' => $tracking_url,
      ];
      drupal_add_js('var audio_player_config = ' . json_encode($audio_player_config) . ';', [
        'type' => 'inline',
      ]);
      $variables['campaign_audio_player'] = theme('campaign_audio_player');
      drupal_add_css(drupal_get_path('theme', 'kreol') . '/build/navigation.css', $css_options);
      drupal_add_js(drupal_get_path('theme', 'kreol') . '/build/navigation.js', $js_options);
    }
  }
}

/**
 * Implements hook_preprocess_entity().
 */
function kreol_preprocess_entity(&$variables) {
  if ('paragraphs_item' === $variables['entity_type']) {
    if ('campaign_audio_book' === $variables['paragraphs_item']->bundle()) {
      $wrapper = entity_metadata_wrapper($variables['entity_type'], $variables['paragraphs_item']);
      $audio_data = json_decode($wrapper->field_audio_data->value(), TRUE);
      if (isset($audio_data['duration'])) {
        $epoch = new \DateTime('@0');
        $time = new \DateTime('@' . $audio_data['duration']);
        $audio_data['duration_formatted'] = $epoch->diff($time)->format('%h:%I:%S');
      }
      $variables['title'] = $audio_data['title'];
      $variables['author'] = $audio_data['artist'];
      $variables['audio_data'] = $audio_data;
      if ($wrapper->field_audio_url->value()) {
        if (preg_match('/(?P<id>.{8}-.{4}-.{4}-.{4}-.{12})/', $wrapper->field_audio_url->value(), $matches)) {
          $variables['audio_url'] = 'https://audio.api.streaming.pubhub.dk/Play.ashx?o=' . $matches['id'];
        }
      }
    }
  }
}

/**
 * Implements hook_theme().
 */
function kreol_theme($existing, $type, $theme, $path) {
  $items['campaign_geofencing'] = [
    'path' => $path . '/templates',
    'template' => 'campaign-geofencing',
    'variables' => [
      'header' => '',
      'buttons' => [
        'accept' => 'OK',
        'decline' => 'Nej tak',
      ],
      'getting_location' => '',
      'checking_location' => '',
      'unknown_location' => '',
      'access_granted' => '',
      'access_denied' => '',
      'geofencing_declined' => '',
      'footer' => '',
    ],
  ];

  $items['campaign_audio_player'] = [
    'path' => $path . '/templates',
    'template' => 'campaign-audio-player',
  ];

  return $items;
}

/**
 * Build a url from a path and a query.
 *
 * Query string values on the form `{{placeholder}}` with be kept in this form
 * in the final url, i.e. they will not be urlencode'd.
 */
function kreol_build_url($path, array $query = []) {
  $url = url($path, ['query' => $query]);

  // Un-urlencode query string values on the form `{{placeholder}}`.
  foreach ($query as $name => $value) {
    if (preg_match('@^[{]{2}(?P<value>[^}]+)[}]{2}$@', $value, $matches)) {
      $url = str_replace('=' . urlencode($value), '=' . '{{' . $matches['value'] . '}}', $url);
    }
  }

  return $url;
}
