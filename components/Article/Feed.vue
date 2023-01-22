<template>
  <div>
    <h3 class="title-bar">{{ title }}</h3>
    <PostCard v-for="item in items" :key="item.slug" :item="item" />
    <b-card v-if="!items.length" class="empty-box">
      <h2>There is nothing to display !</h2>
    </b-card>
    <b-pagination
      v-if="items.length"
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
      this.server + `?limit=${this.perPage}&offset=${this.currentPage}`
    )
    this.rows = this.items.articlesCount
    this.items = this.items.articles
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
