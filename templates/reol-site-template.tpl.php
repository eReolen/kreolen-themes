<?php

/**
 * @file
 * Override reol default site template.
 */
?>
<div id="page<?php print $css_id ? " $css_id" : ''; ?>" class="<?php print $classes; ?>">
    <?php if (!empty($content['branding'])): ?>
    <header class="site-header">
        <section class="topbar">
            <div class="topbar__inner">
                <?php print render($content['branding']); ?>
            </div>
        </section>
    </header>
    <?php endif; ?>

    <div class="main-content">
        <div class="main-content__inner">
            <?php print render($content['content']); ?>
        </div>
    </div>

    <?php if (!empty($content['footer'])): ?>
        <footer class="footer">
            <div class="footer__brand">
                Bibliotekernes e-bøger og netlydbøger
            </div>
            <div class="footer__inner">
                <?php print render($content['footer']); ?>
            </div>
        </footer>
    <?php endif; ?>

    <?php if (!empty($content['bottom'])): ?>
        <div class="bottom">
            <?php print render($content['bottom']); ?>
        </div>
    <?php endif; ?>
</div>
