const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      },
      {//3、CSS-loader
        test:/\.css$/,
        loader:'style-loader!css-loader'//添加对样式表的处理
      },

    ]
  },
  devServer: {//注意：网上很多都有colors属性，但是实际上的webpack2.x已经不支持该属性了
    contentBase: "./dist/index.html",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
    //hot：true,//不要书写该属性，否则浏览器无法自动更新
    //publicPath："/asses/",//设置该属性后，webpack-dev-server会相对于该路径
  }
}