<?php

/**
 * Process ding_carousel.
 */
function kreol_process_ding_carousel(&$variables) {
  // Add dots to carousels. We'll remove those we don't need in styling.
  $variables['slick_settings']['dots'] = TRUE;
  $variables['slick_settings']['arrows'] = FALSE;
}

/**
 * Implementation of hook_preprocess_panels_pane().
 */
function kreol_preprocess_panels_pane(&$variables) {
}
