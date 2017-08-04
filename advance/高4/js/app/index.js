define(['jquery','component/carousel','component/goTop','component/news'
],function($,carousel,GoTop,News){
  carousel.init($('.carousel'));
  new GoTop();
  new News($('.container'));

})