import Vue from 'vue'
const moment = require('moment')
Vue.mixin({
  data() {
    return {}
  },
  computed: {
    isLogin() {
      return this.$cookies.get('token') || this.$store.getters.getUser
    },
    userInfo() {
      return this.$store.state.user
    }
  },
  methods: {
    getDate(date) {
      return date ? moment(date).format('DD-MM-YYYY [at] hh:mm') : ''
    },
    logOut() {
      this.$nuxt.$loading.start()
      this.$store.dispatch('logOut')
      this.$cookies.removeAll()
      localStorage.clear()
      this.$router.go(0)
    }
  }
})
