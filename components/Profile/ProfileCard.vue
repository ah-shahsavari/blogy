<template>
  <div>
    <h3 class="title-bar">Profile</h3>
    <b-card class="my-3">
      <b-card-body class="d-flex flex-column align-items-center p-0">
        <img
          src="https://api.realworld.io/images/demo-avatar.png"
          width="80"
          height="80"
          class="rounded-circle"
        />
        <strong class="mt-3"> {{ item.username }}</strong>
        <div class="d-flex justify-content-around w-100 mt-3">
          <b-button variant="secondary" class="mx-1">
            <BIconPencilSquare />
          </b-button>
          <b-button variant="secondary" class="mx-1">
            <BIconGear />
          </b-button>
          <b-button variant="secondary" class="mx-1">
            <BIconPower />
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
