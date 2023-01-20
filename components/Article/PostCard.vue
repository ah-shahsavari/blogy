<!-- eslint-disable vue/require-default-prop -->
<template>
  <b-card class="my-3 article">
    <b-card-body>
      <nuxt-link class="article__title" :to="`/article/${item.slug}`">
        <h2>{{ item.title }}</h2>
      </nuxt-link>
      <p>{{ item.description + '...' }}</p>
      <div>
        <b-badge v-for="tag in item.tagList" :key="tag" class="mx-1">{{
          tag
        }}</b-badge>
      </div>
      <hr />
      <div class="d-flex justify-content-between align-items-center">
        <div v-if="item.author" class="d-flex align-items-center">
          <img
            :src="item.author.image"
            :alt="item.author.username"
            class="rounded-circle "
            width="40"
            height="40"
          />
          <div class="d-flex flex-column ml-2">
            <span>{{ item.author.username }}</span>
            <small>{{ getDate(item.createdAt) }}</small>
          </div>
        </div>

        <b-button :to="`/article/${item.slug}`">
          ReadMore
        </b-button>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
const moment = require('moment')

export default {
  props: {
    item: {
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {},
      type: Object
    }
  },
  methods: {
    getDate(date) {
      return moment(date).format('DD-MM-YYYY [at] hh:mm')
    }
  }
}
</script>

<style scoped lang="scss">
.article {
  &__title {
    color: #3c3c3c !important;
    &:hover {
      text-decoration: none !important;
    }
  }
}
</style>
