<?php

/**
 * Implementation of hook_preprocess_page().
 */
function kreol_preprocess_page(&$variables) {
}

/**
 * Implementation of hook_preprocess_panels_pane().
 */
function kreol_preprocess_panels_pane(&$variables) {
  if (isset($variables['content']['#object'])) {
    $node = $variables['content']['#object'];
    if ('kreol_campaign' === $node->type) {
      $node_wrapper = entity_metadata_wrapper('node', $node);

      $type = $node_wrapper->field_campaign_add_on->value();
      switch ($type) {
        case 'navigation':
          drupal_add_js(drupal_get_path('theme', 'kreol') . '/build/navigation.js');
          break;

        case 'geofencing':
          if ($node_wrapper->field_geofencing_origin->value() && $node_wrapper->field_geofencing_max_distance->value()) {
            // @TODO Tell the template that geofencing is in action
            drupal_add_js(drupal_get_path('theme', 'kreol') . '/build/geofencing.js');
          }
          break;
      }
    }
  }
}
