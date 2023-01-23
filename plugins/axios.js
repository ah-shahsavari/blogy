export default function({ $axios, store, redirect }) {
  const alertBox = (text, mode) => {
    store._vm.$bvToast.toast(`${text} `, {
      title: text,
      variant: mode,
      autoHideDelay: 5000,
      toaster: 'b-toaster-top-left',
      appendToast: true
    })
  }
  $axios.onRequest((config) => {
    if (store.getters.getUser) {
      // eslint-disable-next-line dot-notation
      config.headers.common['Authorization'] = `Token ${store.getters.getUser}`
    }
    store._vm.$nextTick(() => {
      store._vm.$nuxt.$loading.start()
    })
  })

  $axios.onResponse((res) => {
    store._vm.$nextTick(() => {
      store._vm.$nuxt.$loading.finish()
    })
    if (res.status === 200 && res.config.method === 'put') {
      alertBox('Updated successfully', 'success')
    } else if (res.status === 200 && res.config.method === 'post') {
      alertBox('Done successfully', 'success')
    } else if (res.status === 200 && res.config.method === 'delete') {
      alertBox('Deleted successfully', 'success')
    }
  })
  $axios.onError((error) => {
    store._vm.$nextTick(() => {
      store._vm.$nuxt.$loading.finish()
    })
    if (error.response.status === 500) {
      alertBox('Sorry, server error ! ', 'danger')
    }
    if (error.response.status === 403) {
      alertBox('email or password is invalid !', 'danger')
    }
    if (error.response.status === 404) {
      alertBox('Item is not found! ', 'warning')
    }
    if (error.response.status === 401) {
      alertBox(error.response.data.message, 'danger')
      redirect('/login')
    }
  })
}
