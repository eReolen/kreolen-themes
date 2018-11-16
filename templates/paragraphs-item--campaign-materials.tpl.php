<?php echo __FILE__ ?>

<?php //include 'sites/all/modules/contrib/paragraphs/theme/paragraphs-item.tpl.php' ?>

<div class="<?php print $classes; ?>"<?php print $attributes; ?>>
  <div class="content"<?php print $content_attributes; ?>>
    <h1><?php print render($content['field_title']); ?></h1>

    <?php print render($content['field_materials']); ?>
  </div>
</div>
