<template>
  <div>
    <h3 class="title-bar">Profile</h3>
    <b-card class="my-3 p-0">
      <b-card-body class="d-flex flex-column align-items-center p-0">
        <img
          src="https://api.realworld.io/images/smiley-cyrus.jpeg"
          width="80"
          height="80"
          class="rounded-circle"
        />
        <strong class="mt-3"> {{ item.username }}</strong>
        <div v-if="isLogin" class="d-flex justify-content-between w-100 mt-3">
          <b-button
            v-b-tooltip.hover
            :to="'/article/add'"
            variant="secondary"
            class="mx-1"
            title="Write article"
          >
            <BIconPencilSquare />
          </b-button>
          <b-button
            v-b-tooltip.hover
            :to="'/profile/edit'"
            variant="secondary"
            class="mx-1"
            title="Edit info"
          >
            <BIconGear />
          </b-button>
          <b-button
            v-b-tooltip.hover
            variant="secondary"
            class="mx-1"
            title="SignOut"
            @click="logOut()"
          >
            <BIconPower />
          </b-button>
        </div>
        <div v-else class="d-flex justify-content-md-around w-100  mt-3">
          <b-button
            v-b-tooltip.hover
            variant="secondary"
            class="mx-1"
            title="SignIn"
            :to="'/login'"
          >
            Sign in
          </b-button>
          <b-button
            v-b-tooltip.hover
            variant="secondary"
            class="mx-1"
            title="SignUp"
            :to="'/register'"
          >
            Sign up
          </b-button>
        </div>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import { BIconPencilSquare, BIconPower, BIconGear } from 'bootstrap-vue'
export default {
  components: { BIconPencilSquare, BIconPower, BIconGear },
  props: {
    item: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {}
    }
  }
}
</script>
