import Vue from 'vue'
import VueRouter from 'vue-router'
import ECharts from 'vue-echarts/components/ECharts.vue'

/*import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title.js'*/

Vue.use(VueRouter)
Vue.component('v-chart', ECharts)

import App from './views/App'
import Hello from './views/Hello'
import Home from './views/Home'
import Echarts from './views/Echarts'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello,
        },
        {
            path: '/echarts',
            name: 'echart',
            component: Echarts,
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
