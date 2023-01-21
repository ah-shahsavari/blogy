// // ~/plugins/vuex-persist.js
// import VuexPersistence from 'vuex-persist'

// export default ({ store }) => {
//   new VuexPersistence({
//     /* your options */
//   }).plugin(store)
// }

import createPersistedState from 'vuex-persistedstate'

export const state = () => ({
  counter: 0
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}

/**
 * This is our 'presistedstate state' store :)
 * - paths: a list of 'store(s)' that we wish to be persisted.
 * @type {any[]}
 */
export const plugins = [
  createPersistedState({
    key: 'my-key',
    paths: ['listings', 'search']
  })
]
