<?php

/**
 * @file
 */
?>
<div id="geofencing">
  <div class="geofencing-content">
    <?php if ($header): ?>
      <header><?php echo $header; ?></header>
    <?php endif ?>

    <div class="content">
      <div class="step" data-step="message">
        <button type="button" id="geofencing-accept"><?php echo $buttons['accept'] ?></button>
        <button type="button" id="geofencing-decline"><?php echo $buttons['decline'] ?></button>
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
