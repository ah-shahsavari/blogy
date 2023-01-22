<template>
  <b-container class="mt-5">
    <b-row align-h="center">
      <b-col md="8" sm="12">
        <b-card>
          <b-card-body class="pt-2">
            <h3>user info</h3>
            <hr />
            <b-form @submit.prevent="updateUser()">
              <b-row>
                <b-col md="7" sm="12">
                  <label for="image">Image URL</label>
                  <b-input
                    v-model="model.image"
                    type="text"
                    name="image"
                    placeholder="http://..."
                  />
                  <br />
                  <label for="username">Username</label>
                  <b-input
                    v-model="model.username"
                    type="text"
                    name="username"
                    placeholder="enter username..."
                    required
                  />

                  <br />

                  <b-row>
                    <b-col sm="6">
                      <label for="email">Email</label>
                      <b-input
                        v-model="model.email"
                        type="email"
                        name="email"
                        placeholder="enter email..."
                        required
                      />
                    </b-col>
                    <b-col sm="6">
                      <label for="pass">Password</label>
                      <b-input
                        v-model="model.password"
                        type="password"
                        name="pass"
                        placeholder="new password..."
                      />
                    </b-col>
                  </b-row>
                </b-col>
                <b-col md="5" sm="12">
                  <label for="bio">Bio</label>
                  <b-textarea
                    v-model="model.bio"
                    rows="9"
                    name="bio"
                    placeholder="http://..."
                  />
                </b-col>
              </b-row>

              <hr />
              <b-button type="submit" variant="success"> Submit </b-button>
            </b-form>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  middleware: 'authenticate',
  data() {
    return {
      model: {}
    }
  },
  mounted() {
    this.getUser()
  },
  methods: {
    getUser() {
      this.$axios.$get('/user').then((res) => {
        this.model = res.user
      })
    },
    updateUser() {
      this.$axios.$put('/user', { user: { ...this.model } }).then(() => {})
    }
  }
}
</script>
