<template>
  <b-container>
    <Intro />
    <br />
    <b-row>
      <b-col md="9" sm="8">
        <Feed :title="'Global Feed'" />
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
import Intro from '~/components/Intro.vue'
import ProfileCard from '~/components/Profile/ProfileCard.vue'
import Tags from '~/components/Tags.vue'
export default {
  components: { Intro, Feed, Tags, ProfileCard }
}
</script>

<style></style>
