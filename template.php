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
    // header('Content-type: text/plain'); echo var_export($node, true); die(__FILE__.':'.__LINE__.':'.__METHOD__);
    // Inject geofencing stuff.
    // drupal_add_css(drupal_get_path('theme', 'kreol') . '/experiments/public/build/geofencing.css');
    drupal_add_js(drupal_get_path('theme', 'kreol') . '/build/geofencing.js');
  }
}
