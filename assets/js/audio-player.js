/* global audio_player_config:false, jQuery:false */

(function ($) {
  $(() => {
    const config = audio_player_config || {}
    const player = $('#audio-player')

    const showPlayer = (data) => {
      player.addClass('show')

      const playerUrl = config.player_url.replace(/{{([^}]+)}}/, (match, key) => {
        return key in data ? data[key] : key
      })
      player.find('iframe').attr('src', playerUrl)
    }

    const hidePlayer = () => {
      player.removeClass('show')
      player.find('iframe').attr('src', 'about:blank')
    }

    player.find('.close').on('click', hidePlayer)
    $('[data-audio-data]').on('click', function () {
      const data = $(this).data('audio-data')
      showPlayer(data)
    })
  })
}(jQuery))
