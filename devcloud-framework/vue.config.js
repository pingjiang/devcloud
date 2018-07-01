// --mode development,production,test
// process.env.VUE_APP_*
// process.env.BASE_URL
// const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  baseUrl: '/devcloud',
  productionSourceMap: false, // fast build
  runtimeCompiler: true,
  // transpileDependencies: [/\/node_modules\/devcloud\-framework\/src/],
  devServer: {
    proxy: {
      '/api': {
        target: 'https://jsonplaceholder.typicode.com',
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  pluginOptions: {
    html: {
      title: 'devcloud',
    },
  },
};
