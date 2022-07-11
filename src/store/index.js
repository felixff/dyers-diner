/* eslint-disable */
import {createStore} from 'vuex'
import axios from "axios";
import _ from "lodash";

const SET_STATE = 'setState';
const SET_WINDOW_WIDTH = 'setWindowWidth';
const SET_WINDOW_HEIGHT = 'setWindowHeight';
const SET_SCROLL_POSITION = 'setScrollPosition';
const SET_NAVBAR_FIXED = 'setNavbarFixed';
const SET_ACTIVE_SERVICE = 'setActiveService';
const ADD_TO_CART = 'addToCart';
const REMOVE_FROM_CART = 'removeFromCart';
const TOGGLE_CHECKOUT = 'toggleCheckout';
const TOGGLE_CART = 'toggleCart';
const RESET_CART = 'resetCart';

export default createStore({
  state: {
    scrollPosition: 0,
    bookingActionResult: null,
    existingBookings: [],
    state: 'READY',
    windowInternalWidth: window.innerWidth,
    windowInternalHeight: window.innerHeight,
    isNavbarFixed: false,
    checkoutEnabled: false,
    cartEnabled: false,
    activeService: 'delivery',
    cart: {
      total: 0,
      items: []
    },
    order: {
      name: null,
      addressFirstLine: null,
      addressTown: null,
      addressPostcode: null,
      contactEmail: null,
      contactTel: null,
      total: 0,
      items: []
    }
  },
  getters: {},
  mutations: {
    [SET_SCROLL_POSITION](state, scrollPosition) {
      state.scrollPosition = scrollPosition;
    },
    [SET_STATE](state, currentState) {
      state.state = currentState;
    },
    [SET_WINDOW_WIDTH](state, windowWidthInternal) {
      state.windowInternalWidth = windowWidthInternal;
    },
    [SET_WINDOW_HEIGHT](state, windowInternalHeight) {
      state.windowInternalHeight = windowInternalHeight;
    },
    [SET_NAVBAR_FIXED](state, isNavbarFixed) {
      state.isNavbarFixed = isNavbarFixed;
    },
    [ADD_TO_CART](state, itemToAdd) {
      let found = false;
      state.cart.items.forEach(item => {
        if (item.description === itemToAdd.description) {
          item.quantity += 1;
          item.price += item.price;
          found = true;
        }
      })

      if (found === false) {
        state.cart.items.push(itemToAdd);
      }

      state.cart.total = _.reduce(state.cart.items, (total, item) => {
        return total + item.price;
      }, 0)
    },
    [REMOVE_FROM_CART](state, itemToRemove) {
      _.remove(state.cart.items, {
        description: itemToRemove.description
      });

      state.cart.total = _.reduce(state.cart.items, (total, item) => {
        return total + item.price;
      }, 0)
    },
    [RESET_CART](state) {
      state.cart.items = [];
      state.cart.total = 0;
      state.checkoutEnabled = false;
      state.cartEnabled = false;
    },
    [TOGGLE_CHECKOUT](state, enableCheckout) {
      state.checkoutEnabled = enableCheckout;
    },
    [SET_ACTIVE_SERVICE](state, activeService) {
      state.activeService = activeService;
    },
    [TOGGLE_CART](state) {
      state.cartEnabled = !state.cartEnabled;
    }
  },
  actions: {
    addToCart({commit}) {
      axios.get('/api/cart/add').then((response) => {
        console.log(response)
      }, (err) => {
        console.log(err);
      })
    },
    submitOrder({state, commit}, {address, email, telephone, clientName, mentions}) {
      axios.post('/api/order/submit', {
        order : {
          serviceType: state.activeService,
          address: address,
          email: email,
          telephone: telephone,
          total: state.cart.total,
          items: state.cart.items,
          clientName: clientName,
          mentions: mentions
        }
      }).then((response) => {
        commit(RESET_CART)
      })
    }
  },
  modules: {}
})
