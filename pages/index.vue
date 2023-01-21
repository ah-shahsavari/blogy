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
          <profile-card :item="user" v-if="user" class="mb-4" />
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
  components: { Intro, Feed, Tags, ProfileCard },
  computed: {
    user() {
      return this.$store.state.user
    }
  }
}
</script>

<style></style>
