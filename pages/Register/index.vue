<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <b-container>
    <b-row class="mt-5" align-h="center">
      <b-col sm="8" md="5">
        <b-card class="">
          <b-card-body>
            <h3 class="mb-3">
              Sign up
            </h3>
            <nuxt-link :to="'/login'">
              Have an account?
            </nuxt-link>
            <hr />
            <b-form @submit.prevent="register()">
              <label for="username">Username</label>
              <b-input
                v-model="model.user.username"
                name="username"
                placeholder="username..."
                required
                type="text"
              />
              <br />
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
              <b-button type="submit" block variant="success">
                Register
              </b-button>
            </b-form>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  middleware: 'login',
  data() {
    return {
      model: {
        user: {
          email: '',
          password: '',
          username: ''
        }
      }
    }
  },
  methods: {
    async register() {
      await this.$axios
        .$post('/users', this.model)
        .then((res) => {
          this.$store.dispatch('auth', res.user)
          this.$cookies.set('token', res.user.token, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
          })
          this.$router.push('/')
        })
        .catch(() => {})
    }
  }
}
</script>
