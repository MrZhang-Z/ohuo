const port = 8888;
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/css/public.scss";` //引入全局变量   
      }
    }
  },
  devServer: {
    port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      "/": {
        target: process.env.VUE_APP_URL,
        changeOrigin: true, // 是否改变域名
        ws: false
        // pathRewrite: {
        //   // 路径重写
        //   "/api": "" // 这个意思就是以api开头的，定向到哪里, 如果你的后边还有路径的话， 会自动拼接上
        // }
      }
    }
  }
}