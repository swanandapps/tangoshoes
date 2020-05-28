import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({

    state: {

        title: "Welcome to Vue STORE",
        cartproducts: [],
        clickedproduct: [],
        orders: [],
        disdate: '',
        quantity: "0",
        code2: "20",
        orderdatastore: {},
        final_cartproducts: [],
        promo_applied: false,
        admin_access: false,
        home_active: true,
        home_inactive: false,
        product_active: false,
        product_inactive: true,
        service_active: false,
        service_inactive: true,
        about_active: false,
        about_inactive: true,
        event_active: false,
        event_inactive: true,
        contact_active: false,
        contact_inactive: true




    },
    getters: {
        cartproducts: state => state.cartproducts,

    },

    mutations: {

        ADD_DATE: function(state, dispatchdate) {

            state.disdate = dispatchdate
        }

    },
    actions: {


    }


})