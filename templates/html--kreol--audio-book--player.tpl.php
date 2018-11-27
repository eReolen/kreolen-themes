<?php

/**
 * @file
 * Template for audio book player.
 */

/*
 * This file is Basically a verbatim copy of
 * https://play.pubhub.dk/lyttestation.html
 */

/**
 * Get a query string parameter.
 */
function get_query_parameter($name, $default = NULL) {
  foreach ($_GET as $key => $value) {
    if (0 === strcasecmp($name, $key)) {
      return $value;
    }
  }

  return $default;
}

?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Netlydbog</title>
    <base href="https://play.pubhub.dk/"/>
    <meta http-equiv="cache-control" content="no-cache, no-store" />
    <meta http-equiv="pragma" content="no-cache" />
    <meta http-equiv="expires" content="-1" />
    <meta name="viewport" content="width=device-width, maximum-scale=1.0" />
    <link href="1.1.8/lib/bootstrap-3.2.0-dist/css/bootstrap.min.css" rel="stylesheet" />
    <link href="1.1.8/css/styles.css" rel="stylesheet" />
    <script src="1.1.8/js/jquery-2.1.1.js" type="text/javascript"></script>
    <script src="1.1.8/js/bootstrap-slider.js" type="text/javascript"></script>
    <script src="1.1.8/js/bowser.min.js" type="text/javascript"></script>
    <script src="1.1.8/js/tooltip.js" type="text/javascript"></script>
    <script src="1.1.8/js/modernizr2.7.1.min.js" type="text/javascript"></script>
    <script src="1.1.8/js/dragdealer.js" type="text/javascript"></script>
    <script src="1.1.8/js/player.js" type="text/javascript"></script>
    <script src="1.1.8/js/player-ui.js" type="text/javascript"></script>
    <script src="1.1.8/js/player-kernel.js" type="text/javascript"></script>
    <script type="text/javascript">
        $(function () {
            var autoplay = <?php echo json_encode(get_query_parameter('autoplay', 1)); ?>;
            var loop = <?php echo json_encode(get_query_parameter('autoloop')); ?>;
            var orderId = <?php echo json_encode(get_query_parameter('orderId')); ?>;

            Player.init({
                orderId: orderId,
                metadata: {
                    autosave: false
                },
                state: {
                    position: 0
                },
                autoplay: autoplay,
                loop: loop
            });

            Player.settings.$container.on('ended', function () {
                Player.$ui.data('player').position(0);
                Player.$ui.data('player').play();
            });
        });
    </script>
</head>
<body>
    <div id="container" class="container"></div>
</body>
</html>
