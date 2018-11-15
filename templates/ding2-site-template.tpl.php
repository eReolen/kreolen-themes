<div id="page<?php print $css_id ? " $css_id" : ''; ?>" class="<?php print $classes; ?>">
  <header class="site-header">
    <section class="topbar">
      <div class="topbar-inner">
        eReolen

        Velkommen til eReolen på …
      </div>
    </section>
  </header>

  <?php //echo htmlspecialchars(var_export($content['content'], true)); ?>

  <div class="content-wrapper">
    <div class="content-inner">
      <?php print render($content['content']); ?>
    </div>
  </div>

  <?php if (false): ?>
  <?php if (!empty($content['footer'])): ?>
    <footer class="footer">
      <div class="footer-inner">
        <?php print render($content['footer']); ?>
      </div>
    </footer>
  <?php endif; ?>
  <?php endif; ?>


</div>
