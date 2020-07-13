import Vue from 'vue'

import Router from "vue-router";

Vue.use(Router)

import store from './views/store.vue'

import admin from './views/admin.vue'
import about from './views/about.vue'
import contact from './views/contact.vue'
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
       
/*       

        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/design',
            name: 'design',
            component: () =>
                import ('./views/Design.vue'),
        },

       
        {
            path: "/contact",
            name: "contact",
            component: () =>
                import ('./views/contact.vue'),
        },
        {
            path: "/created",
            name: "created",
            component: () =>
                import ('./views/created.vue'),
        },
        {
            path: "/curated",
            name: "curated",
            component: () =>
                import ('./views/curated.vue'),
        },
        {
            path: "/events",
            name: "events",
            component: () =>
                import ('./views/events.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import ('./views/about.vue'),
        },
        {
            path: "/admin",
            name: "admin",

            component: () =>
                import ('./views/admin.vue'),
            /*
                beforeEnter: (to, from, next) => {


                var pass = prompt("Please Enter Password To Verify")



                if (pass == "apra@123") {

                    next()
                } else {

                    alert("You are Not Authenticated")

                }
            }



        },

         */
        {
            path: "/admin",
            name: "admin",

            component: admin
            /*
                beforeEnter: (to, from, next) => {


                var pass = prompt("Please Enter Password To Verify")



                if (pass == "apra@123") {

                    next()
                } else {

                    alert("You are Not Authenticated")

                }
            }
*/


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
            path: "/about",
            name: "about",
            component: about
        },
        {
            path: "/login",
            name: "login",
            component: login

        },
       

        {

            path: '/ordersuccess',
            name: 'ordersuccess',
            component: ordersuccess


        }


  

    ]
})