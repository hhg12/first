
define(['jquery'],function($){
  function GoTop($container){
    this.ct = $container || $('body');
    this.target = $('<button id="toTop">Top</button>');
    this.bindEvent = function(){
      var btn = this.target;
      var self = this;
      this.target.on('click',function(){
        $(window).scrollTop(0);
      });
      $(window).on('scroll',function(){
        console.log(1);
        var $this = $(this);
        if($this.scrollTop() > 200){
          btn.fadeIn();
        }
        else {
          btn.fadeOut();
        }
      });
    };
    this.createNode = function(){
      this.ct.append(this.target);
      this.target.hide();
    };
    this.createNode();
    this.bindEvent();
  }
// var btn = new GoTop();
return GoTop;
})
