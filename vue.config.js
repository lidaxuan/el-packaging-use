/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-06-22 10:26:57
 * @FilePath: /el-packaging-use/vue.config.js
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-06-22 10:28:44
 */
/**
 * @file webpack config
 */

const path = require('path');
const webpack = require('webpack');

function resolve(dir) {
  return path.join(__dirname, dir);
}

function getSassVar() {
  const text = [];
  if (process.env.VUE_APP_OS_domain) {
    text.push(`$domain: "${process.env.VUE_APP_OS_domain}";`);
  } else {
    text.push(`$domain: null;`);
  }
  text.push('@import "@/assets/styles/common.scss";');
  const code = text.join('\n');
  return code;
}

const port = 9528; // dev port

let publicPath = '/';

if (process.env.NODE_ENV !== 'development') {
  // publicPath = process.env.VUE_APP_OS_domain ? `//${process.env.VUE_APP_OS_domain}` : '/';
}


module.exports = {
  publicPath,
  runtimeCompiler: true,
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,
  parallel: require('os').cpus().length > 1,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/robot': {
        // target: 'http://dev-prd19.easyliao.com', // 开发
        // target: 'http://192.168.169.24:7101', // 开发
        target: 'http://192.168.169.217:7200', // 开发
        // target: 'http://192.168.169.36:7107', // 开发
        // target: 'http://app.easyliao.com', // 测试
        changeOrigin: true,
        pathRewrite: {
          '^/robot': '', //路径重写npm
        },
      },
      '/struct-demo-client': {
        // target: 'http://dev-prd19.easyliao.com', // 开发
        // target: 'http://192.168.169.24:7101', // 开发
        target: 'http://192.168.169.217:7200', // 开发
        // target: 'http://192.168.169.36:7107', // 开发
        // target: 'http://app.easyliao.com', // 测试
        changeOrigin: true,
        // pathRewrite: {
        //   '^/robot': '', //路径重写npm
        // },
      }
    },
    hot: true,
    disableHostCheck: true,
  },
  chainWebpack(config) {
    config.plugins.delete('preload'); // TODO: need test
    config.plugins.delete('prefetch'); // TODO: need test

    config.module.rule('js').include.add(resolve('node_modules/@fengqiaogang/dblist')).end();

    // config.module.rule('pug').use('pug-plain-loader').loader('pug-plain-loader').end();

    config.module.rule('svg').exclude.add(resolve('src/icons')).end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end();
    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true;
        return options;
      })
      .end();

    config
      // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === 'development', conf => conf.devtool('cheap-source-map'));
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('@lijixuan/gojs', resolve('src/components/go'))
      .set('utils', resolve('src/utils'));

    config.plugin('provide').use(webpack.ProvidePlugin, [{
      'window.Quill': 'quill'
    }]);
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: process.env.NODE_ENV === 'development' ? false : true,
    // 开启 CSS source maps?
    sourceMap: process.env.NODE_ENV === 'development' ? true : false,
    // css预设器配置项
    loaderOptions: {
      sass: {
        // @是src的别名
        // prependData: getSassVar()
      }
    },
    extract: false,
    sourceMap: true
  },
};