define([
  'jquery',
  'component/waterFall'
], function($, WaterFall) {
  
  function News($ct){
    this.$ct = $ct;
    this.pageIndex = 1;
    this.num = 4;
    this.bind();
    this.getData(this.add);
    
  }
  News.prototype.getData = function(add){
    var _this = this;
    $.ajax({
      url: 'http://platform.sina.com.cn/slide/album_tech',
      dataType: 'jsonp',  
      jsonp:"jsoncallback",
      data: {
        app_key: '1271687855',
        num: _this.num,
        page: _this.pageIndex
      }
    }).done(function(msg) {
      if(msg){
        _this.add(msg.data);
      }
      console.log(msg.data);
      _this.pageIndex++;
    });
  }

  News.prototype.add = function(arrs){
    var _this = this;
    $.each(arrs,function(idx,obj){
      var $li = _this.createHtml(obj);
      //可以看看变成ready(),会很好玩
      $li.find('img')[0].onload = function(){
        console.log(1);
        _this.$ct.find('.pic-ct').append($li);
        new WaterFall(_this.$ct);
      };
    });
    
  };
    
  News.prototype.bind = function(){
    var _this = this;
    $('#load').on('click',function(){
      if(_this.islocked) return ;
      _this.islocked = true;
      _this.getData(_this.add());
      _this.islocked = false;
    });
  };

  News.prototype.createHtml = function(obj){
    var html = '';
    html += '<li class="item">';
    html += '<img src="' + obj.img_url + '">';
    html += '<h4>' + obj.short_name + '</h4>';
    html += '<p>' + obj.short_intro + '</p>';
    return $(html);
  };
  return News;
});

