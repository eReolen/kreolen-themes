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
        <p class="lead"><?php print render($content['field_tagline'][0]); ?></p>
      </div>
    </div>
  </div>
  <div class="content"<?php print $content_attributes; ?>>
    <div class="container">
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
      <img src="//placehold.it/400x600" alt="Placehold">
    </div>
  </div>
</div>
