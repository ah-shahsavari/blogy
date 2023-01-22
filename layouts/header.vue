<!-- eslint-disable prettier/prettier -->
<template>
  <b-navbar
    toggleable="lg"
    type="dark"
    variant="dark"
    sticky
    class="dark-navbar"
  >
    <b-container>
      <b-navbar-brand :to="'/'">
        Blogy
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="'/'" class="mx-2">
            Home
          </b-nav-item>
          <b-nav-item v-if="!isLogin" :to="'/login'" class="mx-md-2">
            Sign in
          </b-nav-item>
          <b-nav-item v-if="!isLogin" :to="'/register'" class="mx-md-2">
            Sign up
          </b-nav-item>
          <!-- <b-nav-item :to="'/register'" class="mx-2" v-if="isLogin">
          setting
        </b-nav-item> -->
          <b-nav-item v-if="isLogin" :to="'/article/add'" class="mx-md-2">
            <BIconPencilSquare font-scale="1" class="mr-1" />
            write
          </b-nav-item>
          <b-nav-item-dropdown v-if="isLogin" right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <BIconPerson class="mr-1" />
              Profile
            </template>
            <b-dropdown-item :to="'/profile'">
              Profile
            </b-dropdown-item>
            <b-dropdown-item href="#" @click="logOut()">
              Sign Out
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import { BIconPerson, BIconPencilSquare } from 'bootstrap-vue'

export default {
  components: { BIconPerson, BIconPencilSquare }
}
</script>

<style scoped>
.dark-navbar {
  background: rgb(0 0 0 / 75%) !important;
  backdrop-filter: blur(10.7px) !important;
}
</style>
