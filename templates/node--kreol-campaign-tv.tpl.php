<?php

/**
 * @file
 */
?>
<div id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
  <div class="header">
    <div class="container">
      <div class="header-logo">
        <img src="/<?php print path_to_theme(); ?>/images/eReolen_Logo.png" alt="<?php print t('Hjem') ?>" id="logo" />
      </div>
      <div class="header-tagline">
        <span class="lead"><?php print render($content['field_tagline'][0]); ?></span>
      </div>
    </div>
  </div>
  <div class="content"<?php print $content_attributes; ?>>
    <div class="container">
      <?php hide($content['field_tagline']); ?>
      <?php print render($content); ?>
    </div>
  </div>
  <div class="audio-player">
    <div class="audio-player-btn">
      <button class="audio-player-btn-play">Play</button>
    </div>
    <div class="audio-player-info">
      <div class="audio-player-title">Spørg Søren</div>
      <div class="audio-player-progress">
        <div class="audio-player-progress-time">
          <span class="audio-player-progress-time-elapsed">00.00</span>
          <span class="audio-player-progress-time-seperator">/</span>
          <span class="audio-player-progress-time-length">04.26</span>
        </div>
        <div class="audio-player-progress-bar">
          <div class="audio-player-progress-bar-elapsed"></div>
        </div>
      </div>
    </div>
    <div class="audio-player-cover">
      <img alt="Placeholder">
    </div>
  </div>
  <div class="audio-continue-popup" style="display: none;">
    <div class="container">
      <div class="audio-continue-popup-content">
        <button class="audio-continue-popup-btn audio-continue-popup-btn-continue"><?php print t('Continue listening') ?></button>
        <button class="audio-continue-popup-btn audio-continue-popup-btn-restart"><?php print t('Restart') ?></button>
      </div>
    </div>
  </div>
</div>
