<?php

/**
 * @file
 */
?>

<div class="audio-preview <?php print $classes; ?>"<?php print $attributes; ?> data-audio-url="<?php echo htmlspecialchars($audio_url) ?>" data-audio-data="<?php echo htmlspecialchars(json_encode($audio_data)) ?>">
    <?php print render($cover); ?>
    <div class="audio-preview__details">
        <div class="audio-preview__meta">
            <div class="audio-preview__title"><div><?php print $title; ?></div></div>
            <div class="audio-preview__author"><?php print $author; ?></div>
            <?php if (isset($audio_data['duration_formatted'])): ?>
              <div class="audio-preview__duration"><?php print $audio_data['duration_formatted']; ?></div>
            <?php endif ?>
        </div>
        <div class="audio-preview__player" data-isbn="<?php print $isbn; ?>">
            <button class="audio-preview__button"><?php print t('Play audio book'); ?></button>
        </div>
    </div>
</div>
