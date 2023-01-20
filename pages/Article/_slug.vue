<template>
  <div v-if="item">
    <b-jumbotron fluid>
      <h1>{{ item.title }}</h1>
      <hr />
      <div class="d-flex justify-content-between">
        <AuthorBox
          v-if="item.author"
          :item="item.author"
          :created-at="item.createdAt"
        />
        <div class="d-flex">
          <b-button
            variant="outline-dark"
            class="mr-2"
            v-b-tooltip.hover
            title="Follow the author"
          >
            Follow +
          </b-button>
          <like-box
            :count="item.favoritesCount"
            v-b-tooltip.hover
            title="Like this article"
          />
        </div>
      </div>
    </b-jumbotron>
    <b-container>
      <div v-html="item.body"></div>
      <br />
      <b-badge v-for="tag in item.tagList" :key="tag" class="mx-1">
        {{ tag }}
      </b-badge>
    </b-container>
  </div>
</template>

<script>
import AuthorBox from '~/components/Article/AuthorBox.vue'
import LikeBox from '~/components/Article/LikeBox.vue'
export default {
  components: { AuthorBox, LikeBox },
  async fetch() {
    const res = await this.$axios.$get(`/articles/${this.$route.params.slug}`)
    this.item = res.article
  },
  data() {
    return {
      item: {}
    }
  }
}
</script>

<style></style>
