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
          'footer' => 'Læs mere om hvorfor vi skal kende din lokation og hvordan vi håndrete dine data. <a href="http://www.ereolen.dk/datahåndtering">Sådan bruger vi dine data</a>',
        ]);
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
