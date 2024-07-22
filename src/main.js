import Vue from 'vue';

import './style/main.scss'

import App from './App.vue';

Vue.config.productionTip = false;
vue.use(InfiniteLoading, {});

new Vue({
	render: h => h(App),
}).$mount('#root');