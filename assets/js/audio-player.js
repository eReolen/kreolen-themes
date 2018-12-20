/* global audio_player_config:false, jQuery:false */

const substitute = (text, data) => {
  return text.replace(/{{([^}]+)}}/g, (match, key) => {
    return key in data ? data[key] : key
  })
}

(function ($) {
  $(() => {
    const config = audio_player_config || {}
    const player = $('#audio-player')

    const showPlayer = (data) => {
      player.addClass('show')

      const playerUrl = substitute(config.player_url, data)
      player.find('iframe').attr('src', playerUrl)
      if (config.tracking_url) {
        try {
          // Track player opened
          const request = new XMLHttpRequest()
          const trackingUrl = substitute(config.tracking_url, {
            ...data,
            ...{action: 'player-open'}
          })
          request.open('GET', trackingUrl)
          request.send()
        } catch (ex) {}
      }
    }

    const hidePlayer = () => {
      player.removeClass('show')
      player.find('iframe').attr('src', 'about:blank')
    }

    player.find('.modal-close').on('click', hidePlayer)
    $('[data-audio-data]').on('click', function () {
      const data = $(this).data('audio-data')
      showPlayer(data)
    })
  })
}(jQuery))
