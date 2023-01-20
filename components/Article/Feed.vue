<template>
  <div>
    <h3 class="title-bar">{{ title }}</h3>
    <PostCard v-for="item in items.articles" :key="item.slug" :item="item" />
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    />
  </div>
</template>

<script>
import PostCard from './PostCard.vue'

export default {
  components: { PostCard },
  props: {
    server: {
      default: '/articles',
      type: String
    },
    title: {
      default: '',
      type: String
    }
  },
  async fetch() {
    this.items = await this.$axios.$get(
      '/articles' + `?limit=${this.perPage}&offset=${this.currentPage}`
    )
    this.rows = this.items.articlesCount
  },
  data() {
    return {
      items: [],
      currentPage: 0,
      rows: null,
      perPage: 10
    }
  },
  watch: {
    currentPage() {
      this.$fetch()
    }
  }
}
</script>

<style></style>
