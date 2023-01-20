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
        <AuthorBoxVue
          v-if="item.author"
          :item="item.author"
          :created-at="item.createdAt"
        />

        <b-button :to="`/article/${item.slug}`">
          ReadMore
        </b-button>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
import AuthorBoxVue from './AuthorBox.vue'

export default {
  components: { AuthorBoxVue },
  props: {
    item: {
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {},
      type: Object
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
