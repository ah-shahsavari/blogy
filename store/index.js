export const state = () => ({
  user: {}
})

export const getters = {
  getUser(state) {
    return Boolean(state.user && state.user.token)
  }
}

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  }
}

export const actions = {
  auth({ commit }, user) {
    commit('SET_USER', user)
  }
}
