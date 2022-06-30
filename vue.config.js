// el-web-basic 依赖的cdn
const cdns = require("el-web-basic/package/loadjs/index");
// 代码压缩js
const TerserPlugin = require("terser-webpack-plugin");
// 多进程打包
const os = require("os");
// 测试打包速度
// const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');
// 压缩html
// const HtmlWebpackPlugin = require('html-webpack-plugin');

//导入清除插件，可以在每次打包之前清除dist目录的内容
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 抽离css样式
// let MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 用来压缩分离出来的css样式

const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");
// 进度条
const WebpackBar = require("webpackbar");
const ProgressBarWebpackPlugin = require("progress-bar-webpack-plugin");
const path = require("path");
// 查看项目size
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//监控日志
// const SentryCliPlugin = require('@sentry/webpack-plugin');
// gzip压缩
// const CompressionWebpackPlugin = require('compression-webpack-plugin')
// function resolve(dir) {
//     return path.join(__dirname, dir);
// }

// 是否为生产环境
const isProduction = true;
// let ver="1.0.0"
// cdn链接
const cdn = {
    // cdn：模块名称和模块作用域命名（对应window里面挂载的变量名称）
    externals: {
        vue: "Vue",
        vuex: "Vuex",
        "vue-router": "VueRouter",
        axios: "axios",
        ...cdns.externals
    },
    // cdn的css链接
    css: [
        "//statics.easyliao.com/web/public/plugin/nprogress/0.2.0/nprogress.min.css",
        ...cdns.css
    ],
    // cdn的js链接
    js: [
        // '//cdn.jsdelivr.net/npm/fql_img@1.0.29/kcall/plugins/el-web-basic/package/index.js',
        "//statics.easyliao.com/web/vue/vue/2.6.14/vue.min.js",
        "//statics.easyliao.com/web/vue/vue-router/3.5.2/vue-router.min.js",
        "//statics.easyliao.com/web/public/plugin/nprogress/0.2.0/nprogress.min.js",
        // '//statics.easyliao.com/web/vue/element-ui/2.15.3/locale/zh-CN.js',
        "//statics.easyliao.com/web/vue/vuex/3.6.2/vuex.min.js",
        "//statics.easyliao.com/web/vue/axios/0.21.1/axios.min.js",
        ...cdns.js
    ]
};


function resolve(dir) {
    return path.join(__dirname, dir);
}

// views-cdn.easyliao.com/${dev-view/test-view/pre-view/view}${projectName}/${version}/
module.exports = {
    productionSourceMap: true,
    lintOnSave: false, //去掉eslint检验
    // publicPath:process.env.VUE_APP_PBLIC_PATH+'web_beacon/view'+ver,
    publicPath: "",
    // filenameHashing:true,//去掉hash
    // 多线程打包
    parallel: os.cpus().length / 2,
    css: {
        extract: true,
        requireModuleExtension: true,
        sourceMap: false,
        loaderOptions: {
            sass: {
                prependData: `
                @import "~wb@/assets/base/common/index.scss";
                `
            }
        }
    },
    chainWebpack: (config) => {

        // 清除css，js版本号
        config.output.filename("js/[name].js").end();
        config.output.chunkFilename("js/[name].js").end();
        config.plugin("extract-css").tap(() => [
            {
                filename: "css/[name].css",
                chunkFilename: "css/[name].css"
            }
        ]);
        // config.plugin('speed')
        //       .use(SpeedMeasureWebpackPlugin);
        // 查看打包分析
        // config
        //       .plugin('webpack-bundle-analyzer')
        //       .use(BundleAnalyzerPlugin)
        //最小化代码
        config.optimization.minimize(true);

        // 解决ie11兼容ES6
        config.entry("main").add("babel-polyfill");

        // const oneOfsMap = config.module.rule("scss").oneOfs.store;

        // oneOfsMap.forEach((item) => {
        //     item
        //         .use("sass-resources-loader")
        //         .loader("sass-resources-loader")
        //         .options({
        //             // 引入多个全局sass文件
        //             resources: ["./src/assets/base/common/index.scss"]
        //         })
        //         .end();
        // });
        config.resolve.alias
            .set("wb@", path.join(__dirname, "node_modules/web_beacon/src"))
            .set('@', resolve('src'))
            .set("@assets", path.join(__dirname, "src/assets"))
            .set("@scss", path.join(__dirname, "src/assets/style"));

        // ============压缩图片 start============
        // config.module
        //       .rule('images')
        //       .use('image-webpack-loader')
        //       .loader('image-webpack-loader')
        //       .options({ bypassOnDebug: true })
        //       .end()
        // ============压缩图片 end============

        config.plugin("html").tap((args) => {
            // 生产环境或本地需要cdn时，才注入cdn
            if (isProduction) {
                args[0].cdn = cdn;
            }
            return args;
        });
        // ============注入cdn start============
        // 移除 prefetch 插件
        config.plugins.delete("prefetch-index");
        // 移除 preload 插件，避免加载多余的资源
        config.plugins.delete("preload-index");
        /** 删除懒加载模块的 prefetch preload，降低带宽压力(使用在移动端) */
        // config.plugins.delete("prefetch").delete("preload")
    },
    configureWebpack: (config) => {
        // config.entry = {
        //     decision: [
        //         path.join(__dirname, 'src', 'application', 'application.js')
        //     ]
        // };
        config.performance = {
            maxEntrypointSize: 50000000,
            maxAssetSize: 30000000
        };
        config.plugins.push(new WebpackBar(), new ProgressBarWebpackPlugin());
        // 压缩html
        // config.plugins.forEach((val) => {
        //     if (val instanceof HtmlWebpackPlugin) {
        //     }
        // })
        // 用cdn方式引入，则构建时要忽略相关资源
        if (isProduction) {
            config.externals = cdn.externals;
        }

        // 生产环境相关配置
        if (isProduction) {
            //关闭 webpack 的性能提示
            config.performance = {
                hints: false
            };
            // 去掉注释
            config.plugins.push(
                //清除dist目录的插件
                new CleanWebpackPlugin(),
                // new MiniCssExtractPlugin({
                //     filename: 'commonStyle/style.css'}),
                new TerserPlugin({
                    extractComments: false,
                    cache: true,
                    parallel: os.cpus().length / 2, // 根据运维要求，只是用一半数量
                    terserOptions: {
                        output: {
                            // 删除注释
                            comments: false
                        },
                        warnings: false,
                        parse: {},
                        compress: {
                            "drop_console": true,
                            "drop_debugger": true,
                            "pure_funcs": ["console.log"] // 移除console
                        }
                    }
                    // sourceMap: false,
                    // parallel: true
                }),
                new OptimizeCSSPlugin({
                    cssProcessorOptions: {
                        safe: true
                    },
                    sourceMap: false,
                    cssnanoOptions: {
                        preset: [
                            "default",
                            {
                                mergeLonghand: false,
                                cssDeclarationSorter: false
                            }
                        ]
                    }
                })
            );
            // 开启分离js
            config.optimization = {
                splitChunks: {
                    chunks: "all",
                    maxInitialRequests: Infinity,
                    minSize: 30000, // 依赖包超过30000bit将被单独打包
                    automaticNameDelimiter: "_",
                    cacheGroups: {
                        vendor: {
                            test: /[\\/]node_modules[\\/]/,
                            minChunks: 2,
                            minSize: 0,
                            priority: 1
                            // name(module) {
                            //     const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                            // console.log(packageName,11111)
                            // if (packageName=="element-ui"||packageName=="el-web-basic"||packageName=="vendors_home"||packageName=="xe-utils"||packageName=="vxe-table"||packageName=="wangeditor")
                            // return `${packageName.replace("@", "")}`;
                            // },
                        }
                    }
                }
            };
        }
    },
    devServer: {
        proxy: {
            "/apis": {
                target: "http://dev-boss.easyliao.net", //  http://192.168.165.79:7115  http://dev-boss.easyliao.com  http://192.168.165.77:7171 //新运 http://192.168.169.94:57171
                changeOrigin: true,
                loglevel: "debug",
                pathRewrite: {
                    "^/apis": ""
                }
            },
            "/boss-web": {
                target: "http://dev-boss.easyliao.net", //  http://192.168.165.79:7115  http://dev-boss.easyliao.com  http://192.168.165.77:7171 //新运 http://192.168.169.94:57171
                changeOrigin: true,
                loglevel: "debug",
                pathRewrite: {
                    // "^/boss-web": ""
                }
            },
            // "/default": {
            //     target: "http://dev-boss.easyliao.com", // 开发
            //     changeOrigin: true,
            //     pathRewrite: {
            //         "^/default": "" //路径重写npm
            //     }
            // },
            "/eachbot-flow-web": {
                target: 'https://test-prd18.easyliao.net', // 开发
                changeOrigin: true,
                pathRewrite: {
                    // "^/robot": "" //路径重写npm
                }
            },
        }
    }
};
