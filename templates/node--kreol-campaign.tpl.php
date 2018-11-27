<?php

/**
 * @file
 */
?>
<div id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
  <?php if (isset($campaign_audio_player)) {
    echo $campaign_audio_player;
  } ?>

  <?php if (isset($campaign_geofencing)) {
    echo $campaign_geofencing;
  } ?>
  <div class="header">
    <div class="container">
      <div class="header-logo">
        <img src="/<?php print path_to_theme(); ?>/images/eReolen_Logo.svg" alt="<?php print t('Hjem') ?>" id="logo" />
      </div>
      <div class="header-tagline">
        <p class="lead"><?php print render($content['field_tagline'][0]); ?></p>
      </div>
    </div>
  </div>
  <div class="content"<?php print $content_attributes; ?>>
    <div class="container">
      <?php print render($content['field_paragraphs']); ?>
    </div>
  </div>
  <div class="footer">
    <div class="brand">
      <?php print t('Bibliotekernes e-bøger og netlydbøger') ?>
    </div>
    <div class="container">
      <?php print render($content['field_footer']); ?>
    </div>
  </div>
</div>
