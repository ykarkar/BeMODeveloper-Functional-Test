require('./bootstrap');
 
import router from './routes';
import App from  './App.vue';
import Contact from './contact.vue' 

// window.onload = function () {
const app = new Vue({
    el: '#app',
    router : router,
    // router: router,
    template: '<App/>',
    components: {
        App
    }
});
// }

// window.onload = function () {
const contact = new Vue({
    el: '#contact',
    router : router,
    // router: router,
    template: '<Contact/>',
    components: {
        Contact
    }
});
// }