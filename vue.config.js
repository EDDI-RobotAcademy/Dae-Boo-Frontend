const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },

  //naver
  devServer : { //개발 서버 관련 설정을 지정
    proxy : { // 프록시 설정을 지정합니다. 클라이언트에서 발생한 요청을 백엔드 서버로 전달할 때 사용
      "/ROOT" : { // /ROOT로 시작하는 요청은 http://127.0.0.1:8080/로 프록시됩니다. 
        target : 'http://127.0.0.1:3000/',
        changeOrigin : true, //true : 원격 서버의 응답을 클라이언트에게 전달할 때 출처를 변경합니다.
        logLevel : 'debug'
      },
      "/oauth2.0" : { // /oauth2.0로 시작하는 요청은
        target : 'https://nid.naver.com/', //https://nid.naver.com/로 프록시됩니다.
        changeOrigin : true,
        logLevel : 'debug'
      },
      "/v1" : {
        target : 'https://openapi.naver.com/',
        changeOrigin : true,
        logLevel : 'debug'
      },
    },
  }
})
