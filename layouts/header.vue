<template>
  <b-navbar toggleable type="dark" variant="dark" sticky class="dark-navbar">
    <b-container>
      <b-navbar-brand :to="'/'">Blogy</b-navbar-brand>

      <b-navbar-nav class="d-flex flex-row ">
        <b-nav-item :to="'/'" class="mx-2">Home</b-nav-item>
        <b-nav-item :to="'/login'" class="mx-2">Sign in</b-nav-item>
        <b-nav-item :to="'/register'" class="mx-2">Sign up</b-nav-item>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>

<script>
export default {}
</script>

<style scoped>
.dark-navbar {
  background: rgb(0 0 0 / 75%) !important;
  backdrop-filter: blur(10.7px) !important;
}
</style>
