import Controller from "./Controller.js"
import $ from "jquery"

// new Controller({
//   element: '.module2',
//   template: '#module2Template',          //视图分离，放到了index.html中
//   data: {
//     number: 1
//   },
//   events: {
//     'click button[name=increase]': 'increase',
//     'click button[name=decrease]': 'decrease'
//   },
//   init: function () {
//     $.get("./data.json").then((data) => {      //     装一下从服务器获得数据
//       console.log(data)
//       this.data = data
//       this.render()
//     })
//   },
//   increase: function () {
//     this.removeIncrease().then( () =>{
//       this.data.number += 1
//       this.render()
//     })
//
//   },
//   decrease: function () {
//     this.data.number--
//     this.render()
//   },
//   removeIncrease: function () {
//     return new Promise((resolve, reject) => {
//       setTimeout(()=>{
//         console.log("500毫秒过去啦")
//         resolve({number:this.number++})
//       },500)
//     })
//   }
// })

//model和controller分类
let model = {
  data: {
    number: 0
  },
  get(){
    return $.get("./data.json").then((response) => {      //     装一下从服务器获得数据
      this.data = response
    })
  },
  increase(){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        console.log("500毫秒过去啦")
        this.data.number += 1
        resolve()
      },500)
    })
  },
  decrease(){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        console.log("500毫秒过去啦")
        this.data.number -= 1
        resolve()
      },500)
    })
  },
}
new Controller({
  element: '.module2',
  template: '#module2Template',          //视图分离，放到了index.html中
  model: model,
  events: {
    'click button[name=increase]': 'increase',
    'click button[name=decrease]': 'decrease'
  },
  init: function () {
    this.model.get().then(()=>{
      this.render()
    })
  },
  increase: function () {
    this.model.increase().then( () =>{
      this.render()
    })

  },
  decrease: function () {
    this.model.decrease().then(()=>{
      this.render()
    })
  },
})