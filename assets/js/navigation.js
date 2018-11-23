require('../css/navigation.scss');
import GridNavigation from './modules/navigation'

if ('undefined' === typeof gSTB) {
  var gSTB = {
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
    Stop: () => {},
  }
}

const formatTime = (time) => {
  const seconds = time%60;
  time = Math.floor(time/60)
  const minutes = time%60;
  time = Math.floor(time/60)
  const hours = time

  return [hours.toFixed(0), ('0'+minutes.toFixed(0)).slice(-2), ('0'+seconds.toFixed(0)).slice(-2)].join(':')
}

window.addEventListener('load', function() {
	const stb = gSTB

  const debugContainer = document.createElement('pre')
  debugContainer.style.position = 'absolute'
  debugContainer.style.top = debugContainer.style.left = debugContainer.style.right = 0
  debugContainer.style.padding = '1em'
  debugContainer.style.backgroundColor = 'yellow'
  debugContainer.style.color = 'black'
  debugContainer.style.zIndex = 1000
  document.body.appendChild(debugContainer)

  const DEBUG = (...args) => {
    debugContainer.innerHTML = args.map((arg) => JSON.stringify(arg, null, 2)).join('\n')
  }

  const playerContainer = document.createElement('pre')
  playerContainer.style.position = 'absolute'
  playerContainer.style.left = playerContainer.style.right = 0
  playerContainer.style.bottom = 200
  playerContainer.style.padding = '1em'
  playerContainer.style.backgroundColor = 'yellow'
  playerContainer.style.color = 'black'
  playerContainer.style.zIndex = 1000
  document.body.appendChild(playerContainer)

  const PLAYER = (...args) => {
    playerContainer.innerHTML = args.map(JSON.stringify)
  }

  document.querySelector('.audio-player').style.visibility = 'hidden'

  const initPlayer = (data) => {
    document.querySelector('.audio-player').style.visibility = 'visible'
    document.querySelector('.audio-player-title').innerHTML = data.artist
    document.querySelector('.audio-player-cover img').src = data.cover

    document.querySelector('.audio-player-progress-time-elapsed').innerHTML = formatTime(0)
    document.querySelector('.audio-player-progress-time-length').innerHTML = formatTime(data.duration)
    document.querySelector('.audio-player-progress-bar-elapsed').style.width = '0'
  }

  setInterval(() => {
    PLAYER(
      formatTime(stb.GetPosTime()),
      stb.GetPosTime(),
      formatTime(stb.GetMediaLen()),
      stb.GetMediaLen(),
      stb.GetPosPercent()
    )

    document.querySelector('.audio-player-progress-time-elapsed').innerHTML = formatTime(stb.GetPosTime())
    document.querySelector('.audio-player-progress-time-length').innerHTML = formatTime(stb.GetMediaLen())
    document.querySelector('.audio-player-progress-bar-elapsed').style.width = stb.GetPosPercent()+'%'
  }, 1000)

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
      PLAYER(audio)
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
      const element = navigation.select()
      const audioUrl = element.getAttribute('data-audio-url')
      const audioData = JSON.parse(element.getAttribute('data-audio-data'))

      initPlayer(audioData)
      DEBUG('Play audio book', audioUrl, audioData)

      // const audioUrl = 'https://audio.api.streaming.pubhub.dk/Play.ashx?o=942aad16-d9bc-4726-a76d-5c1094bb28f8'
      try {
        stb.Stop()
        stb.InitPlayer()
        stb.Play(audioUrl)
      } catch (ex) {
        DEBUG('exception', ex.message)
      }

      break

    case 33: // PREV TRACK
    case 34: // NEXT TRACK
      break

    case 107: // VOLUME UP
			stb.SetVolume(Math.min(stb.GetVolume()+10, 100))
      break

    case 109: // VOLUME DOWN
			stb.SetVolume(Math.max(stb.GetVolume()-10, 0))
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

    case 66: // SKIP BACKWARD
			stb.SetPosTime(Math.max(stb.GetPosTime() - 30, 0))
      break

    case 70: // SKIP FORWARD
			stb.SetPosTime(Math.min(stb.GetPosTime() + 30, stb.GetMediaLen()))
      break

    case 83: // STOP
      stb.Stop()
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
