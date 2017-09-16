/callback hells 回调地狱/
$.ajax({
  url: './user.json',
  method: 'get',
  success: function(data, statusText, xhr){
    $('#user').text(data.name)
    $.ajax({
      url: './group.json?id=' + data.id,
      method: 'get',
      success: function (data) {
        $('#group').text([data[0].name,data[0].name].join(",")),
          $.ajax({
            url: './group_member.json?id=' + data[0].id,
            method: 'get',
            success: function(data){
              $('#groupMember').text([data[0].name,data[1].name].join(','))
            },
            error: onError
          })
      },
      error: onError
    })
  },
  error: onError
})
function onError(){
  alert("服务器很忙，你先一边待会！")
}