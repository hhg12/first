define([
  'jquery',
], function($) {
   function WaterFall($ct){
     console.log('water');
      var _this = this;
      this.$ct = $ct;
      this.init();
      
      this.$ct.find('.item').each(function(idx,item){
        _this.warterFallPlace($(item));
      });
    }
    WaterFall.prototype.init = function(){
      this.col = [];
      this.colLength = parseInt(this.$ct.width() / this.$ct.find('.item').outerWidth(true));
      //设置一下ul的宽度，方便居中
      this.$ct.find('.pic-ct').width(this.colLength * this.$ct.find('.item').outerWidth(true));
      for(var i=0; i<this.colLength; i++){
        this.col[i] = 0;
      }
    }

    WaterFall.prototype.warterFallPlace = function($node){
      var minVal = Math.min.apply(null,this.col);
      var minIndex = this.col.indexOf(minVal);
      $node.css({
        top: minVal,
        left: minIndex * $node.outerWidth(true)
      })
      console.log($node.outerWidth(true));
      this.col[minIndex] += $node.outerHeight(true);
      var maxVal = Math.max.apply(null,this.col);
      //设置ul长度，延长背景
      this.$ct.find('.pic-ct').height(maxVal);
    }
    return WaterFall;
  
});