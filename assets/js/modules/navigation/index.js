import DOMHelper from '../dom-helper'

class Navigation {
  static get UP() {
    return 'up'
  }

  static get DOWN() {
    return 'down'
  }

  static get LEFT() {
    return 'left'
  }

  static get RIGHT() {
    return 'right'
  }

  constructor(elements, configuration) {
    this.configuration = configuration

    this.elements = Array.prototype.slice.call('string' === typeof elements ? document.querySelectorAll(elements) : elements)
    this.build()
    if (this.elements.length > 0) {
      this.setCurrent(this.elements[0])
    }
  }

  setCurrent(element) {
    if (element) {
      this.current = element
      this.elements.forEach((el) => {
        DOMHelper.removeClass(el, this.configuration.currentClass || 'current')
      })
      DOMHelper.addClass(element, this.configuration.currentClass || 'current')
    }
  }

  build() {
  }

  move(direction) {
  }

  moveTo(index) {
    this.setCurrent(this.elements[index])
  }

  select() {
    return this.current
  }

  getCurrentIndex() {
    return this.elements.indexOf(this.current)
  }
}

class GridNavigation extends Navigation {
  build() {
    const rows = {}
    const cols = {}

    this.elements.forEach((el) => {
      rows[el.offsetTop] = el
      cols[el.offsetLeft] = el
    })

    this.numberOfRows = Object.keys(rows).length
    this.numberOfCols = Object.keys(cols).length
  }

  move(direction) {
    let index = this.getCurrentIndex()
    switch (direction) {
    case Navigation.UP:
      if (this.getCurrentRow() > 0) {
        index -= this.numberOfCols
      }
      break
    case Navigation.DOWN:
      if (this.getCurrentRow() < this.numberOfRows) {
        index += this.numberOfCols
      }
      break
    case Navigation.LEFT:
      if (this.getCurrentCol() > 0) {
        index -= 1
      }
      break
    case Navigation.RIGHT:
      if (this.getCurrentCol() < this.numberOfCols - 1) {
        index += 1
      }
      break
    }

    if (index !== this.getCurrentIndex())
    {
      this.setCurrent(this.elements[index])
    }
  }

  setCurrent(element) {
    super.setCurrent(element)

    if (!this.cursor) {
      this.cursor = document.createElement('div')
      DOMHelper.addClass(this.cursor, this.configuration.cursorClass || 'cursor')
      this.current.parentNode.appendChild(this.cursor)
    }

    if (element) {
      this.cursor.style.top = this.current.offsetTop + 'px'
      this.cursor.style.left = this.current.offsetLeft + 'px'
      this.cursor.style.width = this.current.offsetWidth + 'px'
      this.cursor.style.height = this.current.offsetHeight + 'px'
    }
  }

  getCurrentCol() {
    return this.getCurrentIndex() % this.numberOfCols
  }

  getCurrentRow() {
    return Math.floor(this.getCurrentIndex() / this.numberOfCols)
  }
}

export default GridNavigation
