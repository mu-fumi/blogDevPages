# Vue DevTools 安装应用
1.从这（[vue-tools](https://github.com/vuejs/vue-devtools)）下载 Vue DevTools；

2.在cmd里面执行

	npm install(cnpm install) && npm run build ;

3.进入到 vue-devtools/shells/chrome/manifest.json，修改persistent为true。

4.拖入谷歌浏览器扩展工具界面；

5.勾选允许访问文件网址；

6.一般默认服务器环境自动启用，想要在非服务器单页面启动 ，必须在vue文件中加上

	Vue.config.devtools=true  //使用开发工具
	new Vue({

	　　el: '#app',

	　　data: {

	　　 }

	});
