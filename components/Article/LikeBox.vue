<template>
  <b-button @click="like()" variant="outline-dark">
    <span>{{ count }}</span>
    <BIconHeart v-if="!liked" class="align-middle ml-1" font-scale=".95" />
    <BIconHeartFill v-else class="align-middle ml-1" font-scale=".95" />
  </b-button>
</template>

<script>
import { BIconHeartFill, BIconHeart } from 'bootstrap-vue'
export default {
  components: { BIconHeartFill, BIconHeart },
  props: {
    count: {
      default: 0,
      type: Number
    },
    liked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    like() {}
  }
}
</script>

<style></style>
