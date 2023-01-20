<template>
  <b-container>
    <b-row class="mt-5" align-h="center">
      <b-col sm="8" md="5">
        <b-card class="">
          <b-card-body>
            <h3 class="mb-3">
              Login
            </h3>
            <nuxt-link :to="'/register'">
              Need an account?
            </nuxt-link>
            <hr />
            <b-form @submit.prevent="login()">
              <label for="email">Email</label>
              <b-input
                v-model="model.user.email"
                name="email"
                placeholder="email@example.com"
                required
                type="email"
              />
              <br />
              <label for="password">Password</label>
              <b-input
                v-model="model.user.password"
                name="password"
                required
                placeholder="password..."
                type="password"
              />
              <br />
              <b-button block type="submit" variant="success">Login</b-button>
            </b-form>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      model: {
        user: {
          email: '',
          password: ''
        }
      }
    }
  },
  methods: {
    async login() {
      await this.$axios.$post('/users/login', this.model)
    }
  }
}
</script>
