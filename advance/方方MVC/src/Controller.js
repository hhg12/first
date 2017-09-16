import $ from "jquery"

const handerbars = require('handlebars');

// function Controller(options) {
//   this.$element = $(options.element)
//   this.events = options.events
//   this.bindEvent()
// }
// Controller.prototype.bindEvent = function () {
//   for(let key in this.events) {
//     let parts = key.split(' ')
//     let eventType = parts.shift()
//     let selector = parts.join(' ')
//     console.log(selector)
//     this.$element.on(eventType, selector, this.events[key])
//   }
// }
// export default Controller

//修改成ES6的形式
class Controller {
  constructor(options) {
    for (let key in options) {
      this[key] = options[key]
    }
    this.$element = $(options.element)
    this.events = options.events
    this.init && this.init()
    if (this.template && this.render) {
      this.render()
    }
    this.bindEvent()
  }

  bindEvent() {
    for (let key in this.events) {
      let parts = key.split(' ')
      let eventType = parts.shift()
      let selector = parts.join(' ')
      if (typeof this.events[key] === 'function') {
        this.$element.on(eventType, selector, this.events[key])
      } else if (typeof this.events[key] === 'string') {
        this.$element.on(eventType, selector, this[this.events[key]].bind(this))
      }
    }
  }

  render() {
    let template = (this.template[0] === '#') ? $(this.template).html():this.template
    let html = handerbars.compile(template)(this.model.data)
    this.$element.html(html)
  }
}

export default Controller

