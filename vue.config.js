const { defineConfig } = require('@vue/cli-service')
const postcssPresetEnv = require('postcss-preset-env');
const postcssNested = require('postcss-nested');

module.exports = defineConfig({
  transpileDependencies: true,
  css:{
     loaderOptions:{
      postcss: {
          postcssOptions: {
            plugins: [
              // css 实验阶段 
              postcssPresetEnv(
                {
                  "browsers": ['> 0%', 'last 2 versions'], // 浏览器版本
                  "stage": 0,  // css 实验阶段 
                  'preserve': false,// css渲染时，值从新渲染问题；
                  'features': {
                    'nesting-rules': false, // W3C嵌套模块
                    'custom-properties': true // 自定义属性
                  },
                  'autoprefixer': { "grid": true }, // 自动添加浏览器前缀
              }),
              postcssNested() //  scss 嵌套模板
            ],
          },
    },
     }
  }
})
