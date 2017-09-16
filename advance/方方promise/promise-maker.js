//这是异步的情况，可以看到，首先输出的是undefined，然后才是开始摇
// function 摇色子() {
//   setTimeout(function () {
//     console.log('开始摇')
//     var random = Math.random()
//     if (random > 0.5) {
//       return '大'
//     } else {
//       return '小'
//     }
//   }, 1000)
// }
// var result = 摇色子()
// console.log(result)

//使用回调
// function 摇色子(callback) {
//   setTimeout(function () {
//     console.log('开始摇')
//     var random = Math.random()
//     if (random > 0.5) {
//       callback('大')
//       return '大'
//     } else {
//       callback('小')
//       return '小'
//     }
//   }, 1000)
// }
// var result = 摇色子(function(data){
//   console.log(data)
// })
// console.log(result)

//promise使用 Promise中的函数会立即执行
console.log(1)

function 买大() {
  console.log(2)
  return new Promise(function (resolve, reject) {
    console.log(3)
    setTimeout(function () {
      console.log(4)
      var random = Math.random()
      console.log(random)
      if (random > 0.5) {
        resolve()
      } else {
        reject()
      }
    }, 1000)
  })
}

console.log(5)
var aPromise = 买大()
console.log(6)
aPromise.then(function () {
  console.log(7)
  console.log('win')
}, function () {
  console.log(7)
  console.log('lose')
})

// Promise中的函数会立即执行，但是then会在下一次循环中执行(读完整个JavaScript代码)
// var a  = new Promise(function(resolve,reject){
//   resolve()
// })
// a.then(function(){
//   console.log(1)
// })
// console.log(2)
