export const state = () => ({
  user: {},
  user_token: ''
})

export const getters = {
  getUser(state) {
    return Boolean(state.user && state.user.token)
  }
}

export const mutations = {
  SET_USER(state, user) {
    state.user = user
    state.user_token = user.token
  }
}

export const actions = {
  auth({ commit }, user) {
    commit('SET_USER', user)
  }
}
