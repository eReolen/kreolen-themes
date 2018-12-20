/* global gSTB:false, stbWebWindow:false */

import GridNavigation from './modules/navigation'
import DOMHelper from './modules/dom-helper'

require('../css/navigation.scss')

// Skip backward/forward in seconds
const SKIP_SHORT_DELTA = 1 * 60
const SKIP_LONG_DELTA = 5 * 60

// Volume up/down step
const VOLUME_DELTA = 10

const formatTime = (time) => {
  const seconds = time%60
  time = Math.floor(time/60)
  const minutes = time%60
  time = Math.floor(time/60)
  const hours = time

  return [hours.toFixed(0), ('0'+minutes.toFixed(0)).slice(-2), ('0'+seconds.toFixed(0)).slice(-2)].join(':')
}

const substitute = (text, data) => {
  return text.replace(/{{([^}]+)}}/g, (match, key) => {
    return key in data ? data[key] : key
  })
}

try {
  const stb = gSTB
  stb.GetVolume()
} catch (ex) {
  window.gSTB = {
    Continue: () => {},
    GetMediaLen: () => 53501,
    GetMute: () => 0,
    GetPosPercent: () => 42,
    GetPosTime: () => 87,
    GetVolume: () => {},
    InitPlayer: () => {},
    IsPlaying: () => true,
    Pause: () => {},
    Play: () => {},
    SetMute: () => {},
    SetPosTime: () => {},
    SetVolume: () => {},
    Stop: () => {}
  }
}

window.addEventListener('load', function() {
  const stb = gSTB
  const config = audio_player_config || {}

  // const debugContainer = document.createElement('pre')
  // debugContainer.style.position = 'absolute'
  // debugContainer.style.top = debugContainer.style.left = debugContainer.style.right = 0
  // debugContainer.style.padding = '1em'
  // debugContainer.style.backgroundColor = 'yellow'
  // debugContainer.style.color = 'black'
  // debugContainer.style.zIndex = 1000
  // document.body.appendChild(debugContainer)

  const DEBUG = (...args) => {
    // debugContainer.innerHTML = args.map((arg) => JSON.stringify(arg, null, 2)).join('\n')
  }

  document.querySelector('.audio-player').style.visibility = 'hidden'

  const initPlayer = (data) => {
    try {

      document.querySelector('.audio-player').style.visibility = 'visible'
      document.querySelector('.audio-player-title').innerHTML = data.artist
      document.querySelector('.audio-player-cover img').src = data.cover

      document.querySelector('.audio-player-progress-time-elapsed').innerHTML = formatTime(0)
      document.querySelector('.audio-player-progress-time-length').innerHTML = formatTime(data.duration)
      document.querySelector('.audio-player-progress-bar-elapsed').style.width = '0'

    } catch (ex) {
      DEBUG('exception', ex.message)
    }
  }

  let currentlyPlayingElement = null

  const startPlayer = (element) => {
    if (element === currentlyPlayingElement) {
      if (stb.IsPlaying()) {
        stb.Pause()
      } else {
        stb.Continue()
      }
      return
    } else {
      const audioUrl = element.getAttribute('data-audio-url')
      const audioData = JSON.parse(element.getAttribute('data-audio-data'))

      if (audioUrl && audioData) {
        initPlayer(audioData)
        DEBUG('Play audio book', audioUrl, audioData)

        try {
          stb.Stop()
          stb.InitPlayer()
          stb.Play(audioUrl)
          currentlyPlayingElement = element
        } catch (ex) {
          DEBUG('exception', ex.message)
        }

        if (config.tracking_url) {
          try {
            // Track player started
            const request = new XMLHttpRequest()
            const trackingUrl = substitute(config.tracking_url, {
              ...audioData,
              ...{action: 'player-start'}
            })
            request.open('GET', trackingUrl)
            request.send()
          } catch (ex) {
            alert(ex)
          }
        }
      }
    }
    updatePlayer()
  }

  const stopPlayer = () => {
    stb.Stop()
  }

  const updatePlayer = () => {
    DEBUG([
      new Date(),
      formatTime(stb.GetPosTime()),
      stb.GetPosTime(),
      formatTime(stb.GetMediaLen()),
      stb.GetMediaLen(),
      stb.GetPosPercent()
    ])

    if (stb.IsPlaying()) {
      DOMHelper.addClass(document.querySelector('.audio-player'), 'is-playing')
    } else {
      DOMHelper.removeClass(document.querySelector('.audio-player'), 'is-playing')
    }
    document.querySelector('.audio-player-progress-time-elapsed').innerHTML = formatTime(stb.GetPosTime())
    document.querySelector('.audio-player-progress-time-length').innerHTML = formatTime(stb.GetMediaLen())
    document.querySelector('.audio-player-progress-bar-elapsed').style.width = stb.GetPosPercent()+'%'
  }

  setInterval(updatePlayer, 500)

  const navigation = new GridNavigation('.paragraphs-item-campaign-audio-book', {
    currentClass: 'kreol-campaign-current'
  })

  document.addEventListener('keydown', function (e) {
    DEBUG({
      // 'key': e.key,
      'keyCode': e.keyCode
    })

    switch (e.keyCode) {
    case 8: // BACK
    case 27: // EXIT
    case 122: // HOME
      stbWebWindow.close()
      break

    case 89: // INFO
      // DEBUG(audio)
      break

    case 40: // DOWN
      navigation.move(GridNavigation.DOWN)
      break

    case 37: // LEFT
      navigation.move(GridNavigation.LEFT)
      break

    case 39: // RIGHT
      navigation.move(GridNavigation.RIGHT)
      break

    case 38: // UP
      navigation.move(GridNavigation.UP)
      break

    case 13: // ENTER/OK
    case 32: // SPACE
      startPlayer(navigation.select())
      break

    case 33: // PREV TRACK
      stb.SetPosTime(Math.max(stb.GetPosTime() - SKIP_LONG_DELTA, 0))
      updatePlayer()
      break

    case 34: // NEXT TRACK
      stb.SetPosTime(Math.min(stb.GetPosTime() + SKIP_LONG_DELTA, stb.GetMediaLen()))
      updatePlayer()
      break

    case 66: // SKIP BACKWARD
      stb.SetPosTime(Math.max(stb.GetPosTime() - SKIP_SHORT_DELTA, 0))
      updatePlayer()
      break

    case 70: // SKIP FORWARD
      stb.SetPosTime(Math.min(stb.GetPosTime() + SKIP_SHORT_DELTA, stb.GetMediaLen()))
      updatePlayer()
      break

    case 107: // VOLUME UP
      stb.SetVolume(Math.min(stb.GetVolume() + VOLUME_DELTA, 100))
      break

    case 109: // VOLUME DOWN
      stb.SetVolume(Math.max(stb.GetVolume() - VOLUME_DELTA, 0))
      break

    case 192: // MUTE
      stb.SetMute(0 === stb.GetMute() ? 1 : 0)
      break

    case 82: // PLAY/PAUSE
      DEBUG(stb.IsPlaying())
      if (stb.IsPlaying()) {
        stb.Pause()
      } else {
        stb.Continue()
      }
      break

    case 83: // STOP
      stopPlayer()
      break

    case 116:
      DEBUG('Reloading …')
      stb.Stop()
      location.reload(true)
      break
    }
  })

  DEBUG('Ready')
})
