<?php

/**
 * @file
 */
?>

<div class="audio-preview <?php print $classes; ?>"<?php print $attributes; ?> data-audio-url="<?php echo htmlspecialchars($audio_url) ?>" data-audio-data="<?php echo htmlspecialchars(json_encode($audio_data)) ?>">
    <div class="ting-cover-wrapper">
      <div class="ting-cover ting-cover-processed" data-ting-cover-style="ding_primary_large">
        <img src="<?php print $audio_data['cover'] ?>" alt="<?php print $audio_data['artist'] . ' – ' . $audio_data['title']; ?>"/>
      </div>
    </div>
    <div class="audio-preview__details">
        <div class="audio-preview__meta">
            <div class="audio-preview__title"><div><?php print $title; ?></div></div>
            <div class="audio-preview__author"><?php print $author; ?></div>
            <?php if (isset($audio_data['duration_formatted'])): ?>
              <div class="audio-preview__duration"><?php print $audio_data['duration_formatted']; ?></div>
            <?php endif ?>
        </div>
        <div class="audio-preview__player">
            <button class="audio-preview__button"><?php print t('Play audio book'); ?></button>
        </div>
    </div>
</div>
