'use strict';
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const debugMode = process.env.NODE_ENV === 'development';

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  devServer: {
    // proxy: 'https://www.travel.taipei', // 設置代理.
    proxy: {
      '/api': {
        target: 'https://www.travel.taipei',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  pages: {
    index: {
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
    },
  },
  // css相關配置.
  css: {
    // 開啟 CSS source maps.
    sourceMap: debugMode,
    loaderOptions: {
      scss: {
        prependData: `@import "./src/styles/base.scss";`,
      },
    },
  },
  publicPath: '/',
  outputDir: 'dist',
  lintOnSave: debugMode,
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  },
  chainWebpack(config) {
    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        options.compilerOptions.preserveWhitespace = true;
        return options;
      })
      .end();

    config
      // https://webpack.js.org/configuration/devtool/#development
      .when(debugMode, (config) => config.devtool('cheap-source-map'));

    config.when(process.env.NODE_ENV === 'production', (config) => {
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial', // only package third parties that are initially dependent
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      });
    });
  },
};
