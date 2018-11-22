require('../css/navigation.scss');
import GridNavigation from './modules/navigation'

window.addEventListener('load', function() {
  var stuff = document.createElement('pre')
  stuff.style.position = 'absolute'
  stuff.style.bottom = stuff.style.left = stuff.style.right = 0
  stuff.style.padding = '1em'
  stuff.style.backgroundColor = 'yellow'
  stuff.style.color = 'black'
  document.body.appendChild(stuff)

  const navigation = new GridNavigation('.paragraphs-item-campaign-audio-book', {
    currentClass: 'kreol-campaign-current'
  })

  document.addEventListener('keydown', function (e) {
    stuff.innerHTML = JSON.stringify({
      // 'key': e.key,
      'keyCode': e.keyCode
    }, null, 2)

    switch (e.keyCode) {
    case 8: // BACK
    case 27: // EXIT
    case 122: // HOME
      stbWebWindow.close()
      break

    case 89: // INFO
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
      stuff.innerHTML = 'Play audio book'

      const audioUrl = 'https://audio.api.streaming.pubhub.dk/Play.ashx?o=942aad16-d9bc-4726-a76d-5c1094bb28f8'
			const stb = gSTB
			stb.Stop()
			stb.InitPlayer()
			stb.Play(audioUrl)

      break

    case 33: // PREV TRACK
    case 34: // NEXT TRACK

    case 107: // VOLUME UP
    case 109: // VOLUME DOWN
    case 192: // MUTE


    case 82: // PLAY/PAUSE
    case 66: // SKIP BACKWARD
    case 70: // SKIP FORWARD
    case 83: // STOP
      break

    case 116:
      stuff.innerHTML = 'Reloading …'
      location.href = location.href
      break
    }
  })
})



// (function ($) {
//   if ('undefined' === typeof stbWebWindow) {
//     var stbWebWindow = {
//       close: () => {}
//     }
//   }

//   $(() => {
//     alert('ready')
//     setTimeout(() => {
//       const navigation = new GridNavigation('.paragraphs-item-campaign-audio-books .field-name-field-audio-books .field-item > div', {
//         currentClass: 'kreol-campaign-current'
//       })

//       const stuff = document.createElement('pre')
//       stuff.style.position = 'absolute'
//       stuff.style.bottom = stuff.style.left = stuff.style.right = 0
//       stuff.style.padding = '1em'
//       stuff.style.backgroundColor = 'yellow'
//       stuff.style.color = 'black'
//       document.body.appendChild(stuff)

//       alert(87)

//       document.addEventListener('keydown', function(event) {
//         stuff.innerHTML = JSON.stringify({
//           'key': event.key,
//           'keyCode': event.keyCode
//         }, null, 2)


//         if (116 === event.keyCode) {
//           // Reload
//           location.href = location.href
//           return
//         }

//         switch (event.key) {
//         case 'Escape':
//           stbWebWindow.close()
//           break
//         case 'ArrowDown':
//           navigation.move(GridNavigation.DOWN)
//           break
//         case 'ArrowLeft':
//           navigation.move(GridNavigation.LEFT)
//           break
//         case 'ArrowRight':
//           navigation.move(GridNavigation.RIGHT)
//           break
//         case 'ArrowUp':
//           navigation.move(GridNavigation.UP)
//           break
//         case 'Enter':
//         case ' ':
//           const element = navigation.select()
//           ;;; console.log('select', element)
//           break
//         default:
//           if (!isNaN(parseInt(event.key))) {
//             navigation.moveTo(parseInt(event.key)-1)
//           }
//           break
//         }
//       })

//       alert(42)
//     }, 1000)
//   })
// }(jQuery))
