const uglifyjsplugs=require('uglifyjs-webpack-plugin')
const webpackmerge=require('webpack-merge')
const baseconfig=require('./base.config.js')
module.exports= webpackmerge(baseconfig, {
    plugins:[
      new uglifyjsplugs()
    ]
})