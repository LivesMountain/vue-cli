const webpackmerge=require('webpack-merge')
const baseconfig=require('./base.config.js')
module.exports= webpackmerge(baseconfig,{
    devServer:{
      contentBase:'./dist',
      inline:true
    }
})