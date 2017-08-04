define(['jquery'],function($){

      function Carousel($ct){
        this.$ct = $ct;
        this.pageIndex = 0;
        this.isanimate = false;
        this.init();
        this.bind();
        setInterval(function(){
          this.imgNext(1);
          }.bind(this),2000);

      }
      Carousel.prototype.init = function(){
        this.$prebtn = this.$ct.find('a.pre');
        this.$nextbtn = this.$ct.find('a.next');
        this.$imgCt = this.$ct.find('.img-ct');
        this.$imgs = this.$ct.find('.img-ct>li');
        this.$bullets = this.$ct.find('.bullet li');

        this.$imgCount = this.$imgs.length;
        this.$imgWidth =  this.$imgs.width();
        this.$imgCt.append(this.$imgs.first().clone());
        this.$imgCt.prepend(this.$imgs.last().clone());
        this.$imgCt.width((this.$imgCount + 2) * this.$imgWidth);
        this.$imgCt.css({left: -this.$imgWidth});
      }
      Carousel.prototype.bind = function(){
        var _this = this;
        this.$prebtn.on('click',function(){
          _this.imgPre(1);
        });
        this.$nextbtn.on('click',function(){
          _this.imgNext(1);
        });
        this.$bullets.on('click',function(){
          _this.$bullets.removeClass('active');
          $(this).addClass('active');
          var index = $(this).index();
          console.log(index);
          if(index > _this.pageIndex){
            _this.imgNext(index - _this.pageIndex);
          }
          if(index < _this.pageIndex){
            _this.imgPre(_this.pageIndex - index);
          }
        })
      }
      Carousel.prototype.imgPre = function(len){
        if(this.isanimate)  return;
        this.isanimate = true;
        var _this = this;
        this.$imgCt.animate({
          left: '+=' + len*_this.$imgWidth
        },function(){
          _this.pageIndex-=len;
          if(_this.pageIndex < 0){
            _this.pageIndex = 3;
            _this.$imgCt.css({left:-(_this.$imgCount)*_this.$imgWidth});
          }
          _this.setBullet();
          _this.isanimate = false;
        });
      }
      Carousel.prototype.imgNext = function(len){
        var _this = this;
        if(this.isanimate)  return;
        this.isanimate = true;
        this.$imgCt.animate({
          left: '-=' + len*_this.$imgWidth
        },function(){
          _this.pageIndex+=len;
          if(_this.pageIndex > 3){
            _this.pageIndex = 0;
            _this.$imgCt.css({left:-_this.$imgWidth});
          }
          _this.setBullet();
          _this.isanimate = false;
        });
      }
      Carousel.prototype.setBullet = function(){
        this.$bullets.removeClass('active')
                .eq(this.pageIndex).addClass('active');
      }
      var carousel = (function(){
        return {
          init: function($ct){
            $ct.each(function(index,node){
              new Carousel($(node));
            })
          }
        }
      })()
      // carousel.init($('.carousel'));
      return carousel;
})