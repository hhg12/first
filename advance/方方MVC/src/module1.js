// import $ from "jquery"
//开始 最符合我们意思的方法
// let $module1 = $('.module1')
// $module1.on('change', 'input', function () {
//   console.log("change1")
// })
// $module1.on('click', 'button', function () {
//   console.log("click1")
// })

//利用普通的函数进行一定的封装，似乎代码更多了
// function Maker(options) {
//   let controller = {}
//   controller.$element = $(options.element)
//   controller.events = options.events
//   for(let key in controller.events){
//     let parts = key.split(' ')
//     let eventType = parts.shift()
//     let selector = parts.join(' ')
//     console.log(selector)
//     controller.$element.on(eventType,selector,controller.events[key])
//   }
// }
// Maker({
//   element: '.module1',
//   events:{
//     'change input': function(e){
//       console.log("change1111")
//     },
//     'click button': function(e){
//       console.log("click1")
//     }
//   }
// })

//使用构造函数的方式
// function Maker(options) {
//   this.$element = $(options.element)
//   this.events = options.events
//   this.bindEvent()
// }
// Maker.prototype.bindEvent = function () {
//   for(let key in this.events) {
//     let parts = key.split(' ')
//     let eventType = parts.shift()
//     let selector = parts.join(' ')
//     console.log(selector)
//     this.$element.on(eventType, selector, this.events[key])
//   }
// }
// new Maker({
//   element: '.module1',
//   events:{
//     'change input': function(e){
//       console.log("change1111")
//     },
//     'click button': function(e){
//       console.log("click1")
//     }
//   }
// })

//构建Controller.js 利用import,添加了render方法更新DOM
// import Controller from "./Controller.js"
// import $ from "jquery"
// new Controller({
//   element: '.module1',
//   events:{
//     'change input': 'onChangeInput',
//     'click button': 'onClickBtn'
//   },
//   onClickBtn: function(){
//     let val = $('.module1').find('input').val()
//     this.render(val)
//   },
//   onChangeInput: function (e) {
//     var input = e.target
//     console.log(input.value)
//   },
//   render: function (value) {
//     let $output = this.$element.find('.output')
//     if($output.length === 0){
//       let $div = $('<div class="output"><div>').text(value)
//       $div.appendTo(this.$element)
//     }else {
//       $output.text(value)
//     }
//   }
// })

//接下来要添加 template ，占位符，模板引擎,MVC C就是Controller这个类，V就是template即html和占位符，M是data
//在module2.js中我们实现了控制器和视图的分离
import Controller from "./Controller.js"
import $ from "jquery"
// const handerbars = require('handlebars');

new Controller({
  element: '.module1',
  template: `
    <input type="text" name="modules1" value="{{output}}">
    <button name="button1">点我</button>
    <div class="output">{{output}}</div>
  `,
  data: {
    output: '1'
  },
  events: {
    'change input': 'onChangeInput',
    'click button': 'onClickBtn'
  },
  onClickBtn: function () {
    let val = $('.module1').find('input').val()
    this.data.output = val
    this.render()
  },
  onChangeInput: function (e) {
    var input = e.target
    console.log(input.value)
  },
  // render: function () {
  //   let html = this.template.replace(/\{\{\s*(\S*)\s*\}\}/g, (match, g1) =>{
  //     return this.data[g1]
  //   })
  //   this.$element.html(html)
  // }
  //用一下模板引擎handerbars,放到了Controller.js中
})