      requirejs.config({
        baseUrl: '../js',    //找到js目录
        paths: {
          'jquery': 'lib/jquery-3.2.1.min'
        }
      });
      requirejs(['app/index']);   //js/app/index.js