const alertBox = (text, mode) => {
  this.$bvToast.toast(`${text} `, {
    title: 'BootstrapVue Toast',
    autoHideDelay: 5000
  })
}

export default function({ $axios, store }) {
  $axios.onRequest((config) => {
    store._vm.$nextTick(() => {
      store._vm.$nuxt.$loading.start()
    })
  })

  $axios.onResponse((res) => {
    store._vm.$nextTick(() => {
      store._vm.$nuxt.$loading.finish()
    })

    if (res.status === 200 && res.config.method === 'put') {
      alertBox('Product is updated succesful', 'success')
    } else if (res.status === 200 && res.config.method === 'post') {
      alertBox('Product is added succesful', 'success')
    } else if (res.status === 200 && res.config.method === 'delete') {
      alertBox('Product is deleted succesful', 'error')
    }
  })
  $axios.onError((error) => {
    store._vm.$nextTick(() => {
      store._vm.$nuxt.$loading.finish()
    })
    if (error.response.status === 500) {
      alertBox('Sorry, server error ! ', 'error')
    }
    if (error.response.status === 404) {
      alertBox('Item is not found! ', 'warning')
    }
  })
}
