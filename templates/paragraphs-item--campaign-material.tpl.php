<?php echo __FILE__ ?>

<?php include 'sites/all/modules/contrib/paragraphs/theme/paragraphs-item.tpl.php' ?>

<div style="width: 200px; min-height: 300px; background: orange">
<?php print render($variables['cover']) ?>
<?php print render($variables['isbn']) ?>
<?php print render($variables['author']) ?>
<?php print render($variables['title']) ?>
</div>
