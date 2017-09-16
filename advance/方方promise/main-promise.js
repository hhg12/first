$.get('./user.json').then(function (data) {
  $('#user').text(data.name)
  $.get('group.json?id=' + data.id).then(function (data) {
    $('#group').text([data[0].name, data[0].name].join(","))
    $.get('group_member.json?id=' + data[0].id).then(function (data) {
      $('#groupMember').text([data[0].name, data[1].name].join(','))
      console.log('成功')
    }, onError)
  }, onError)
}, onError)

function onError() {
  console.log('被雷劈')
}