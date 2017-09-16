// $('form').on('submit',function(e){
//   e.preventDefault()
//   $('form input[type = submit]').prop('disabled',true)
//   $.post('./user.json')
//     .then(function(data){              //第一次then
//     console.log(data)
//   }, function(xhr){
//     console.log(xhr.status)
//   })
//     .then(function(){                  //第二次then，当第一次then处理了成功或失败的结果返回处理了之后，第二个then会调用成功的函数
//       console.log('第二次成功！')
//       $('form input[type = submit]').prop('disabled',false)
//     })
// })


$('form').on('submit', function (e) {
  e.preventDefault()
  $('form input[type = submit]').prop('disabled', true)
  getUser()
    .then(function () {                  //第二次then，当第一次then处理了成功或失败的结果返回处理了之后，第二个then会调用成功的函数
      console.log('第二次成功！')
      $('form input[type = submit]').prop('disabled', false)
    })
})

function getUser() {
  var promise = $.post('./user.json')
  promise.then(function (data) {              //第一次then
    console.log(data)
  }, function (xhr) {
    console.log(xhr.status)
  })
  return promise                //promise === promise.then
}