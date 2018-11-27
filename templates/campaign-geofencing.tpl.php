<?php

/**
 * @file
 */
?>
<div class="modal">
  <div class="container">
    <div class="modal-inner">
      <div id="geofencing" class="geofencing">
        <img src="/<?php print path_to_theme(); ?>/images/globe.svg" alt="<?php print t('Globus') ?>"/>
        <?php if ($header): ?>
          <header>
            <h2><?php echo $header; ?></h2>
            <p><?php echo $lead; ?></p>
          </header>
        <?php endif ?>

        <div class="content">
          <div class="step" data-step="message">
            <button type="button" id="geofencing-accept" class="geofencing-btn geofencing-btn-black"><?php echo $buttons['accept'] ?></button>
            <button type="button" id="geofencing-decline" class="geofencing-btn geofencing-btn-default"><?php echo $buttons['decline'] ?></button>
          </div>
          <div class="step" data-step="getting-location"><?php echo $getting_location ?></div>
          <div class="step" data-step="checking-location"><?php echo $checking_location ?></div>
          <div class="step" data-step="unknown-location"><?php echo $unknown_location ?></div>
          <div class="step" data-step="access-granted"><?php echo $access_granted ?></div>
          <div class="step" data-step="access-denied"><?php echo $access_denied ?></div>
          <div class="step" data-step="geofencing-declined"><?php echo $geofencing_declined ?></div>
        </div>

        <?php if ($footer): ?>
          <footer><?php echo $footer; ?></footer>
        <?php endif ?>
      </div>
    </div>
  </div>
</div>
