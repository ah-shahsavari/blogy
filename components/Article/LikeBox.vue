<template>
  <b-button @click="like()" variant="outline-dark">
    <span>{{ count }}</span>
    <BIconHeartFill class="align-middle" font-scale=".95" />
  </b-button>
</template>

<script>
import { BIconHeartFill } from 'bootstrap-vue'
export default {
  components: { BIconHeartFill },
  props: {
    count: {
      default: 0,
      type: Number
    }
  },
  methods: {
    like() {}
  }
}
</script>

<style></style>
