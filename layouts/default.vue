<template>
  <div class="bg-light d-flex flex-column h-screen ">
    <Header />
    <nuxt class="flex-grow-1" keep-alive />
  </div>
</template>

<script>
import Header from './header.vue'

export default {
  components: { Header },
  data() {
    return {}
  }
}
</script>
