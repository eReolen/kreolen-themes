<?php

/**
 * @file
 */
?>
<div id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
  <?php if (isset($campaign_geofencing)) {
    echo $campaign_geofencing;
  } ?>

  <div class="header">
    <div class="header-logo">
      <img src="/<?php print path_to_theme(); ?>/images/eReolen_Logo.svg" alt="<?php print t('Hjem') ?>" id="logo" />
    </div>
    <div class="header-tagline">
      <?php print render($content['field_tagline'][0]); ?>
    </div>
  </div>

  <div class="content"<?php echo $content_attributes; ?>>
    <?php echo render($content['field_paragraphs']); ?>
  </div>

  <div class="footer">
    <?php echo render($content['field_footer']); ?>
  </div>
</div>
