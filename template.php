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
    $node = $variables['node'];
    if ('kreol_campaign' === $node->type) {
      $audio_player_config = [
        'player_url' => 'https://play.pubhub.dk/index118.html?o={{orderId}}&autoplay=1',
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
          'header' => 'Accepter anmodning om at kende din lokation',
          'lead' => 'For at få adgang til lydbøgerne skal du acceptere at vi må kende din lokation. Tryk på Accepter i den lille popup ved adresselinjen her i browseren.<br>Hvis du vælger at blokere kan du <b>ikke</b> få adgang.',
          'buttons' => [
            'accept' => 'Accepter betingelserne og fortsæt',
            'decline' => 'Nej tak, jeg ønkser ikke at lytte til gratis lydbøger',
          ],
          'getting_location' => 'Henter din placering …',
          'checking_location' => 'Tjekker din placering …',
          'unknown_location' => 'Det var ikke muligt at finde din placering.',
          'access_granted' => 'Velkommen. Du har nu adgang til lydbøgerne.',
          'access_denied' => 'Ifølge din placering er du ikke på hospitalet.',
          'geofencing_declined' => 'Ærgerligt. Du kan altid finde spændende e- og lydbøger på <a href="https://ereolen.dk">eReolen</a>.',
          'footer' => 'Læs mere om hvorfor vi skal kende din lokation og hvordan vi håndtere dine data. <a href="http://www.ereolen.dk/datahåndtering">Sådan bruger vi dine data</a>',
        ]);

        drupal_add_css(drupal_get_path('theme', 'kreol') . '/build/geofencing.css');
        drupal_add_js(drupal_get_path('theme', 'kreol') . '/build/geofencing.js');
      }
      else {
        drupal_add_css(drupal_get_path('theme', 'kreol') . '/build/kreol.css');
        drupal_add_js(drupal_get_path('theme', 'kreol') . '/build/kreol.js');
      }
    }
    elseif ('kreol_campaign_tv' === $node->type) {
      drupal_add_css(drupal_get_path('theme', 'kreol') . '/build/navigation.css');
      drupal_add_js(drupal_get_path('theme', 'kreol') . '/build/navigation.js');
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
        $time = new \DateTime('@'.$audio_data['duration']);
        $audio_data['duration_formatted'] = $epoch->diff($time)->format('%h:%I:%S');
      }
      $variables['title'] = $audio_data['title'];
      $variables['author'] = $audio_data['artist'];
      $variables['audio_data'] = $audio_data;
      $variables['audio_url'] = $wrapper->field_audio_url->value();
    }
  }
}

/**
 *
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
