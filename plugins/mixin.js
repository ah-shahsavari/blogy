import Vue from 'vue'
const moment = require('moment')
Vue.mixin({
  data() {
    return {}
  },
  methods: {
    getDate(date) {
      return date ? moment(date).format('DD-MM-YYYY [at] hh:mm') : ''
    }
  }
})
