({
  baseUrl: "../js",    //找到js目录
  paths: {
    'jquery': './lib/jquery-3.2.1.min'
  },
  name: "app/main",     //找到main.js
  out: "./index.merge.min.js"    //合并文件输出到那
})