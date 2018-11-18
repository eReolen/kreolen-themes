<?php

/**
 * Implementation of hook_preprocess_page().
 */
function kreol_preprocess_page(&$variables) {
  header('Content-type: text/plain'); echo var_export(null, true); die(__FILE__.':'.__LINE__.':'.__METHOD__);
}

/**
 * Implementation of hook_preprocess_panels_pane().
 */
function kreol_preprocess_panels_pane(&$variables) {
  if (isset($variables['node']->type)) {
    header('Content-type: text/plain'); echo var_export($variables['theme_hook_suggestions'], true); die(__FILE__.':'.__LINE__.':'.__METHOD__);
  }
}
