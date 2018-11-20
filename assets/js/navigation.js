import GridNavigation from './modules/navigation'

(function ($) {
  $(() => {
    setTimeout(() => {
      const navigation = new GridNavigation('.paragraphs-item-campaign-audio-books .field-name-field-audio-books .field-item > div', {
        currentClass: 'kreol-campaign-current'
      })

      document.addEventListener('keypress', function(event) {
        switch (event.key) {
        case 'ArrowDown':
          navigation.move(GridNavigation.DOWN)
          break
        case 'ArrowLeft':
          navigation.move(GridNavigation.LEFT)
          break
        case 'ArrowRight':
          navigation.move(GridNavigation.RIGHT)
          break
        case 'ArrowUp':
          navigation.move(GridNavigation.UP)
          break
        case 'Enter':
        case ' ':
          const element = navigation.select()
          ;;; console.log('select', element)
          break
        case '0':
        case '1':
        case '2':
          navigation.moveTo(event.key)
        default:
          break
        }
      })
    }, 1000)
  })
}(jQuery))
