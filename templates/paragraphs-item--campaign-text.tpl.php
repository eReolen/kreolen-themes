<?php

/**
 * @file
 */
?>
<div class="<?php print $classes; ?>"<?php print $attributes; ?>>
  <div class="content"<?php print $content_attributes; ?>>
      <?php if (isset($content['field_heading'])): ?>
          <h2 class="heading"><?php print render($content['field_heading']); ?></h2>
      <?php endif ?>

      <?php print render($content['field_text']); ?>
  </div>
</div>
