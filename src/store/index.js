/* eslint-disable */
import {createStore} from 'vuex'
import axios from "axios";
const SET_STATE = 'setState';
const SET_WINDOW_WIDTH = 'setWindowWidth';
const SET_SCROLL_POSITION = 'setScrollPosition';
const SET_NAVBAR_FIXED = 'setNavbarFixed';

export default createStore({
  state: {
    scrollPosition: 0,
    bookingActionResult: null,
    existingBookings: [],
    state: 'READY',
    windowWidthInternal: window.innerWidth,
    isNavbarFixed: false
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
      state.windowWidthInternal = windowWidthInternal;
    },
    [SET_NAVBAR_FIXED](state, isNavbarFixed) {
      state.isNavbarFixed = isNavbarFixed;
    }
  },
  actions: {
    addToCart({commit}) {
      axios.get('/api/v1/cart/add').then((response) => {
        console.log(response)
      }, (err) => {
        console.log(err);
      })
    },
  },
  modules: {}
})
