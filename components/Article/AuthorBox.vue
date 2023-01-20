<template>
  <div class="d-flex align-items-center">
    <img
      :src="item.image"
      :alt="item.username"
      class="rounded-circle "
      width="40"
      height="40"
    />
    <div class="d-flex flex-column ml-2">
      <span>{{ item.username }}</span>
      <small>{{ getDate(createdAt) }}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {},
      type: Object
    },
    createdAt: {
      default: '',
      type: String
    }
  }
}
</script>

<style></style>
