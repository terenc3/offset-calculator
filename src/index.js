import css from './index.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './index.vue';
import Calculator from './calculator.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
        path: '/',
        component: Calculator
    }]
});

const app = new Vue({
    router,
    render: createEle => createEle(Index)
}).$mount('#app-container');
