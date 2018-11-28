<?php

/**
 * @file
 */
?>
<div class="modal modal-hidden" id="audio-player">
  <div class="container">
    <div class="modal-inner">
      <button type="button" class="modal-close" data-dismiss="modal" aria-label="Close" title="<?php print t('Close') ?>">
        <span aria-hidden="true">&times;</span>
      </button>
      <div class="audio-player">
        <iframe id="audio-player-frame" src="about:blank"></iframe>
      </div>
    </div>
  </div>
</div>
