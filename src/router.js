import Vue from 'vue'

import Router from "vue-router";

Vue.use(Router)

import store from './views/store.vue'

import admin from './views/admin.vue'
import contact from './views/contact.vue'
import about from './views/about.vue'

import productdetails from './views/productDetails.vue'
import cart from './views/cart.vue'
import checkout from './views/checkout.vue'
import login from './views/login.vue'
import ordersuccess from './views/ordersuccess.vue'







export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'store',
            component: store
        },

        {
            path: "/admin",
            name: "admin",

            component: admin
       

        },
        {
            path: "/productdetails/:id",
            name: "productdetails",
            component: productdetails

        },
         
        {
            path: "/contact",
            name: "contact",
            component: contact
        },
        {
            path: "/cart",
            name: "cart",
            component: cart
        },
        {
            path: "/checkout",
            name: "checkout",
            component: checkout

        },
       
        {
            path: "/login",
            name: "login",
            component: login

        },

        {
            path: "/about",
            
            component: about

        },
       

        {

            path: '/ordersuccess',
            name: 'ordersuccess',
            component: ordersuccess


        }


  

    ]
})