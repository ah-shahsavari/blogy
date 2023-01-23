<template>
  <b-button @click="like()" variant="outline-dark">
    <span>{{ count }}</span>
    <BIconHeart v-if="!liked" class="align-middle ml-1" font-scale=".95" />
    <BIconHeartFill
      v-else-if="liked"
      class="align-middle ml-1"
      font-scale=".95"
    />
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
    slug: {
      type: String,
      default: ''
    },
    liked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    like() {
      if (!this.liked) {
        this.$axios.$post(`/articles/${this.slug}/favorite`).then((res) => {
          console.log(res.article.favorited)
          this.liked = res.article.favorited
          this.count = res.article.favoritesCount
        })
      } else {
        this.$axios.$delete(`/articles/${this.slug}/favorite`).then((res) => {
          console.log(res.article.favorited)
          this.liked = res.article.favorited
          this.count = res.article.favoritesCount
        })
      }
    }
  }
}
</script>

<style></style>
