<?php

/**
 * @file
 */

/**
 * Implements hook_page_alter().
 */
function kreol_page_alter(&$page) {
  $node = menu_get_object();
  if (NULL !== $node && 'kreol_campaign_tv' === $node->type) {
    // Remove Webtrekk tracking script.
    unset($page['page_bottom']['webtrekk']['#attached']['js']);
  }
}

/**
 * Implements hook_js_alter().
 */
function kreol_js_alter(&$js) {
  if (user_is_logged_in()) {
    return;
  }

  if ('node' === arg(0)) {
    $node = node_load(arg(1));
    if ('kreol_campaign_tv' === $node->type) {
      $js = array_filter($js, function ($item) {
        return 'settings' === $item
          || is_numeric($item)
          || 'sites/all/themes/kreol/build/navigation.js' === $item;
      }, ARRAY_FILTER_USE_KEY);
    }
  }
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

    $node = $variables['node'];
    if ('kreol_campaign' === $node->type) {
      $player_url = kreol_build_url('https://play.pubhub.dk/lyttestation.html', [
        'i' => '{{isbn}}',
      ]);
      $tracking_url = kreol_build_url('https://play.pubhub.dk/lyttestation.html', [
        'i' => '{{isbn}}',
        's' => request_path(),
        'type' => 'kampagne',
      ]);

      $audio_player_config = [
        'player_url' => $player_url,
        'tracking_url' => $tracking_url,
      ];
      drupal_add_js('var audio_player_config = ' . json_encode($audio_player_config) . ';', [
        'type' => 'inline',
      ]);
      $variables['campaign_audio_player'] = theme('campaign_audio_player');

      drupal_add_css(drupal_get_path('theme', 'kreol') . '/build/kreol.css', $css_options);
      drupal_add_js(drupal_get_path('theme', 'kreol') . '/build/kreol.js', $js_options);
    }
    elseif ('kreol_campaign_tv' === $node->type) {
      $tracking_url = kreol_build_url('https://play.pubhub.dk/lyttestation.html', [
        'i' => '{{isbn}}',
        's' => request_path(),
        'type' => 'tv-reol',
      ]);

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

/**
 * Implements theme_ting_object_cover().
 *
 * Apart from the `$base_url` stuff, this is a verbatim copy of
 * `pratchett_ting_object_cover`.
 */
function kreol_ting_object_cover($variables) {
  // Start with the default rendering.
  $output = theme_ting_object_cover($variables);

  // Add type/quota icons.
  $ding_entity = $variables['object'];
  $icons = reol_frontend_ding_entity_icons($ding_entity);

  // Add link if the id is not to a fake material.
  $ding_entity_id = $ding_entity->ding_entity_id;
  if (!reol_base_fake_id($ding_entity_id) && !isset($ding_entity->reol_no_link)) {
    $path = isset($ding_entity->reol_is_collection) ? 'ting/collection/' : 'ting/object/';
    $base_url = 'https://ereolen.dk/';
    $path = $base_url . $path;
    $output = l($output, $path . $ding_entity_id, array('html' => TRUE));
  }

  return '<div class="ting-cover-wrapper">' . $output . $icons . '</div>';
}
