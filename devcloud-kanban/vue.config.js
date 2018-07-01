module.exports = {
  baseUrl: '/kanban',
  productionSourceMap: false, // fast build
  runtimeCompiler: true,
  transpileDependencies: [/\/node_modules\/devcloud\-framework\/src/],
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
      title: 'devcloud | kanban',
    },
  },
};
