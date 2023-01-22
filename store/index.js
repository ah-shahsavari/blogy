export const state = () => ({
  user: {}
})

export const getters = {
  getUser(state) {
    return state.user && state.user.token
  }
}

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  SET_USER_EMPTY(state) {
    state.user = {}
  }
}

export const actions = {
  auth({ commit }, user) {
    commit('SET_USER', user)
  },
  logOut({ commit }, user) {
    commit('SET_USER_EMPTY', user)
  }
}
