module.exports = {
  devServer: {
    proxy: 'http://shoes-backend-php/',
  }
}

// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   configureWebpack: {
//     devServer: {
//       headers: { "Access-Control-Allow-Origin": "*" }
//     }
//   }
//   // css: {
//   //   loaderOptions: {
//   //     sass: {
//   //       additionalData: `@import '@/css/bulma/sass/elements/box.sass'`
//   //     }
//   //   }
//   // }
// })
