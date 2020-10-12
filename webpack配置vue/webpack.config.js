const path = require('path')
const webpack=require('webpack')
const HtmlWebPackPlugin=require('html-webpack-plugin')
const uglifyjsplugs=require('uglifyjs-webpack-plugin')

module.exports={
    entry:'./src/main.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        // publicPath:'dist/'
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            // 使用多个loader是从右向左读
            use: [ "style-loader",'css-loader' ]
          },
          {
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 1200
                }
              }
            ]
          },
      {
        test: /\.js$/,
        //排除node模块的js和bower的js
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            //如果要使用@babel/preset-env这里需要在根目录新建一个babel的文件
            // presets: ['@babel/preset-env']
            //这里直接使用指定
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
        }
      },
        ]
    },
    resolve:{
      alias:{
        'vue$':'vue/dist/vue.esm.js'
      }
    },
    plugins:[
      new webpack.BannerPlugin('LIKUN'),
      new HtmlWebPackPlugin({
        template:'index.html'
      }),
      new uglifyjsplugs()
    ],
    devServer:{
      contentBase:'./dist',
      inline:true
    }
}