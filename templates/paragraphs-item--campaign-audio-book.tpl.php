<?php

/**
 * @file
 */
$wrapper = entity_metadata_wrapper('paragraphs_item', $paragraphs_item);
$audio_url = $wrapper->field_audio_url->value();
?>

<?php if (TRUE || empty($audio_url)): ?>

<div class="audio-preview <?php print $classes; ?>"<?php print $attributes; ?>>
    <?php print render($cover); ?>
    <div class="audio-preview__details">
        <div class="audio-preview__meta">
            <div class="audio-preview__title"><div><?php print t('Audio preview') ?>: <?php print $title; ?></div></div>
            <div class="audio-preview__author"><?php print $author; ?></div>
        </div>
        <div class="audio-preview__player" data-isbn="<?php print $isbn; ?>">
            <span class="audio-preview__time">
                <span class="audio-preview__played">00.00</span> / <span class="audio-preview__duration">00.00</span>
            </span>
            <button class="audio-preview__button">play</button>
            <div class="audio-preview__progress"><div class="audio-preview__progress__complete"></div></div>
        </div>
    </div>
</div>

<?php else: ?>

<div class="audio-book <?php print $classes; ?>"<?php print $attributes; ?> data-audio-url="<?php echo $audio_url ?>">
    <?php print render($cover); ?>
    <div class="audio-book__details">
        <div class="audio-book__meta">
            <div class="audio-book__title"><div><?php print t('Audio book') ?>: <?php print $title; ?></div></div>
            <div class="audio-book__author"><?php print $author; ?></div>
        </div>
        <div class="audio-book__player" data-isbn="<?php print $isbn; ?>">
            <span class="audio-book__time">
                <span class="audio-book__played">00.00</span> / <span class="audio-book__duration">00.00</span>
            </span>
            <button class="audio-book__button">play</button>
            <div class="audio-book__progress"><div class="audio-book__progress__complete"></div></div>
        </div>
    </div>
</div>


<?php endif ?>
