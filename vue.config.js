const { defineConfig } = require('@vue/cli-service')
const postcssPresetEnv = require('postcss-preset-env'); // postcss 最新css特性支持
const postcssNested = require('postcss-nested'); // sass 嵌套模板
const postcssCustomProperties = require("postcss-custom-properties"); // 用W3C自定义属性中的语法支持变量。
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
                  'preserve': false,// css渲染时，值重新渲染问题；
                  'features': {
                    'nesting-rules': false, // W3C嵌套模块
                    'custom-properties': false // 自定义属性
                  },
                  'autoprefixer': { "grid": true }, // 自动添加浏览器前缀
              }),
              postcssNested(), //  scss 嵌套模板
              // 用W3C自定义属性中的语法支持变量。
              postcssCustomProperties({
                importFrom: [
                  "./src/assets/css/index.css"
                ], // 不导入 全局自定义媒体不生效
                overrideImportFromWithRoot: false, // 通过importFrom导入的属性是否被root属性腐败，false:bu被覆盖
                disableDeprecationNotice:true // 去掉importFrom将过期的日志
              })
            ],
          },
    },
     }
  }
})
