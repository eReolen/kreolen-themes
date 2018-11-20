<?php

/**
 * @file
 * Override reol default site template.
 */
?>
<div id="page<?php print $css_id ? " $css_id" : ''; ?>" class="<?php print $classes; ?>">
<?php if (0 === 1): ?>
    <div id="geofencing-overlay"></div>
    <div id="geofencing" data-origin="56.1917588,10.1711573" data-max-distance="1000">
      <div class="geofencing-content">
      <header>
        For at få adgang til lydbøgerne …
      </header>

      <div class="content">
        <div class="step" data-step="message">
          <button type="button" id="geofencing-accept">OK</button>
          <button type="button" id="geofencing-decline">Glem det!</button>
        </div>
        <div class="step" data-step="getting-location">
          Henter din placering …
        </div>
        <div class="step" data-step="checking-location">
          Tjekker din placering …
        </div>
        <div class="step" data-step="unknown-location">
          Vi kan desværre ikke finde din placering.
        </div>
        <div class="step" data-step="access-granted">
          Velkommen. Du har nu adgang til lydbøgerne.
        </div>
        <div class="step" data-step="access-denied">
          Du er desværre ikke på hospitalet!
        </div>
        <div class="step" data-step="geofencing-declined">
          Ærgerligt. Du kan altid finde spændende e- og lydbøger på <a href="https://ereolen.dk">eReolen</a>.
        </div>
      </div>

      <footer>
        Læs mere om hvorfor …
      </footer>
      </div>
    </div>
<?php endif ?>

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
