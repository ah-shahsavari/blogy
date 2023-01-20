<template>
  <div v-if="loading" id="panel-loading">
    <b-spinner id="large-indicator" variant="light" />
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style scoped>
#panel-loading {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: rgb(0 0 0 / 84%);
}
#large-indicator {
  z-index: 10000;
}
</style>
