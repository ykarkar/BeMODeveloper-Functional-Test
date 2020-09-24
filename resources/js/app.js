require('./bootstrap');
 
import router from './routes';
import App from  './App.vue';
 
const app = new Vue({
    el: '#app',
    router : router,
    // router: router,
    template: '<App/>',
    components: {
        App
    }
});