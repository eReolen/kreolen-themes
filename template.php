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
 * Implements hook_preprocess_panels_pane().
 */
function kreol_preprocess_node(&$variables) {
  if (isset($variables['node'])) {
    $node = $variables['node'];
    if ('kreol_campaign' === $node->type) {
      $wrapper = entity_metadata_wrapper('node', $node);
      if ($wrapper->field_geofencing_origin->value() && $wrapper->field_geofencing_max_distance->value()) {
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

        drupal_add_css(drupal_get_path('theme', 'kreol') . '/build/geofencing.css');
        drupal_add_js('var geofencing_config = ' . json_encode($geofencing_config) . ';', [
          'type' => 'inline',
        ]);
        drupal_add_js(drupal_get_path('theme', 'kreol') . '/build/geofencing.js');

        $variables['campaign_geofencing'] = theme('campaign_geofencing', [
          'header' => 'For at få adgang til lydbøgerne …',
          'buttons' => [
            'accept' => 'OK',
            'decline' => 'Glem det!',
          ],
          'getting_location' => 'Henter din placering …',
          'checking_location' => 'Tjekker din placering …',
          'unknown_location' => 'Vi kan desværre ikke finde din placering.',
          'access_granted' => 'Velkommen. Du har nu adgang til lydbøgerne.',
          'access_denied' => 'Du er desværre ikke på hospitalet!',
          'geofencing_declined' => 'Ærgerligt. Du kan altid finde spændende e- og lydbøger på <a href="https://ereolen.dk">eReolen</a>.',
          'footer' => 'Læs mere om hvorfor …',
        ]);
      }
    }
    elseif ('kreol_campaign_tv' === $node->type) {
      drupal_add_css(drupal_get_path('theme', 'kreol') . '/build/navigation.css');
      drupal_add_js(drupal_get_path('theme', 'kreol') . '/build/navigation.js');
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

  return $items;
}
