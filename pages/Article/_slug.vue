<template>
  <div v-if="item.article">
    <b-jumbotron fluid>
      <h1>{{ item.article.title }}</h1>
      <hr />
      <div v-if="item.article.author" class="d-flex align-items-center">
        <img
          :src="item.article.author.image"
          :alt="item.article.author.username"
          class="rounded-circle "
          width="40"
          height="40"
        />
        <div class="d-flex flex-column ml-2">
          <span>{{ item.article.author.username }}</span>
          <small>{{ getDate(item.article.createdAt) }}</small>
        </div>
      </div>
    </b-jumbotron>
    <b-container>
      <div v-html="item.article.body"></div>
      <br />
      <b-badge v-for="tag in item.article.tagList" :key="tag" class="mx-1">
        {{ tag }}
      </b-badge>
    </b-container>
  </div>
</template>

<script>
const moment = require('moment')
export default {
  async fetch() {
    this.item = await this.$axios.$get(`/articles/${this.$route.params.slug}`)
  },
  data() {
    return {
      item: {}
    }
  },
  methods: {
    getDate(date) {
      return moment(date).format('DD-MM-YYYY [at] hh:mm')
    }
  }
}
</script>

<style></style>
