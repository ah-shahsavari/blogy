<template>
  <div>
    <h3 class="title-bar">{{ title }}</h3>
    <b-card class="my-3 p-0 ">
      <b-card-body class="p-0">
        <b-badge v-for="tag in items.tags" :key="tag" class="mx-1">
          {{ tag }}
        </b-badge>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: 'Tags',
      type: String
    },
    server: {
      default: '/tags',
      type: String
    }
  },
  async fetch() {
    this.items = await this.$axios.$get(this.server)
  },
  data() {
    return {
      items: []
    }
  }
}
</script>

<style></style>
