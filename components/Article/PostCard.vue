<!-- eslint-disable vue/require-default-prop -->
<template>
  <b-card class="my-3 article">
    <b-card-body>
      <like-box
        class="Likebox"
        v-b-tooltip.hover
        title="Like this article"
        :count.sync="item.favoritesCount"
        :liked.sync="item.favorited"
        :slug="item.slug"
      />
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

        <b-button :to="`/article/${item.slug}`" variant="dark" class="ml-1">
          <BIconArrowRightShort />
        </b-button>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
import { BIconArrowRightShort } from 'bootstrap-vue'
import AuthorBoxVue from './AuthorBox.vue'
import LikeBox from './LikeBox.vue'

export default {
  components: { AuthorBoxVue, LikeBox, BIconArrowRightShort },
  props: {
    item: {
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {},
      type: Object
    }
  }
}
</script>

<style lang="scss">
.article {
  position: relative;
  .Likebox {
    position: absolute !important;
    top: 10px;
    right: 10px;
    border: 0px !important;
  }
  &__title {
    color: #3c3c3c !important;
    &:hover {
      text-decoration: none !important;
    }
  }
}
</style>
