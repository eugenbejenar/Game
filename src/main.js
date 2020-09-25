import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'


Vue.component('home', Home);
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')