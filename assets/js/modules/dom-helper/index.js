class DOMHelper {
  static addClass(element, name) {
    const names = element.className.split(/\s+/)
    if (-1 === names.indexOf(name)) {
      element.className += ' ' + name
    }
  }

  static removeClass(element, name) {
    const names = element.className.split(/\s+/)
    const index = names.indexOf(name)
    if (-1 < index) {
      names.splice(index, 1).join(' ')
      element.className = names.join(' ')
    }
  }
}

export default DOMHelper
