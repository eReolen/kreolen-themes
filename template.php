<?php

/**
 * Implementation of hook_preprocess_page().
 */
function kreol_preprocess_page(&$variables) {
}

/**
 * Implementation of hook_preprocess_panels_pane().
 */
function kreol_preprocess_node(&$variables) {
  if (isset($variables['node'])) {
    $node = $variables['node'];
    if ('kreol_campaign' === $node->type) {
      $wrapper = entity_metadata_wrapper('node', $node);

      $type = $wrapper->field_campaign_add_on->value();
      switch ($type) {
        case 'navigation':
          drupal_add_js(drupal_get_path('theme', 'kreol') . '/build/navigation.js');
          break;

        case 'geofencing':
          if ($wrapper->field_geofencing_origin->value() && $wrapper->field_geofencing_max_distance->value()) {
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
          break;
      }
    }
  }
}

function kreol_theme($existing, $type, $theme, $path) {
  $items['campaign_geofencing'] = [
    'path' => $path . '/templates',
    'template' => 'campaign-geofencing',
    'variables' => [
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
    ],
  ];

  return $items;
}
