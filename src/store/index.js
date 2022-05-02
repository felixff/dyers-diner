import {createStore} from 'vuex'
const SET_STATE = 'setState';
const SET_WINDOW_WIDTH = 'setWindowWidth';
const SET_SCROLL_POSITION = 'setScrollPosition';

export default createStore({
  state: {
    scrollPosition: 0,
    bookingActionResult: null,
    existingBookings: [],
    state: 'READY',
    windowWidthInternal: window.innerWidth
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
    }
  },
  actions: {
  },
  modules: {}
})
