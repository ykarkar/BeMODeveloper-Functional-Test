import VueRouter from 'vue-router';
import Home from './components/Home';
import contactUs from './components/contactUs';
 
let routes = [
    {
        path:"/",
        component:Home
    },
    {
        path:"/contactUs",
        component:contactUs
    },
];
 
 
export default new VueRouter({
    routes
});