<div id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
  <?php
    $wrapper = entity_metadata_wrapper('node', $node);
    switch ($wrapper->field_campaign_add_on->value()) {
      case 'geofencing':
        $config = [
          'origins' => array_map(function ($spec) {
            list($latitude, $longitude) = array_map('floatval', preg_split('/\s*,\s*/', $spec));
            return [
              'coords' => [
                'latitude' => $latitude,
                'longitude' => $longitude,
              ],
            ];
          }, $wrapper->field_geofencing_origin->value()),
          'max_distance' => (int) $wrapper->field_geofencing_max_distance->value(),
        ];
        print '<script id="campaign-geofencing-config" type="application/json">'.json_encode($config).'</script>';
        print $campaign_geofencing;
        break;
    }
  ?>

  <div class="header">
    <div class="header-logo">
      <img src="/<?php print path_to_theme(); ?>/images/eReolen_Logo.svg" alt="<?php print t('Hjem') ?>" id="logo" />
    </div>
    <div class="header-tagline">
      <?php print render($content['field_tagline'][0]); ?>
    </div>
  </div>

  <div class="content"<?php print $content_attributes; ?>>
    <?php print render($content['field_paragraphs']); ?>
  </div>

  <div class="footer">
    <?php print render($content['field_footer']); ?>
  </div>
</div>
