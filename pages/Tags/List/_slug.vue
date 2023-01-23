<template>
  <b-container>
    <b-row class="mt-4">
      <b-col md="9" sm="8">
        <Feed
          :title="$route.params.slug"
          :server="`/articles?tag=${$route.params.slug}&`"
        />
      </b-col>
      <b-col md="3" sm="4">
        <div class="sticky">
          <profile-card
            v-if="userInfo"
            :item="userInfo"
            class="mb-4 d-sm-block d-none"
          />
          <Tags :title="'Popular Tags'" />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Feed from '~/components/Article/Feed.vue'
import ProfileCard from '~/components/Profile/ProfileCard.vue'
import Tags from '~/components/Tags.vue'
export default {
  components: { Feed, Tags, ProfileCard }
}
</script>

<style></style>
