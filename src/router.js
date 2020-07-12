import Vue from 'vue'

import Router from "vue-router";


import store from './views/store.vue'

import about from './views/about.vue'





Vue.use(Router)

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
*/


        },
        {
            path: "/productdetails/:id",
            name: "productdetails",
            component: () =>
                import ('./views/productDetails.vue'),

        },
         
        {
            path: "/contact",
            name: "contact",
            component: () =>
                import ('./views/contact.vue'),
        },
        {
            path: "/cart",
            name: "cart",
            component: () =>
                import ('./views/cart.vue'),
        },
        {
            path: "/checkout",
            name: "checkout",
            component: () =>
                import ('./views/checkout.vue'),

        },

        /*
        {
            path: '/about',
            name: 'about',
            component: about
        },
        */
        {
            path: "/login",
            name: "login",
            component: () =>
                import ('./views/login.vue'),

        },
        {

            path: "/services",
            name: "services",
            component: () =>
                import ('./views/services.vue'),
        },

        {

            path: '/ordersuccess',
            name: 'ordersuccess',
            component: () =>
                import ('./views/ordersuccess.vue'),


        }


  

    ]
})