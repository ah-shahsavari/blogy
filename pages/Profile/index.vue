<template>
  <b-container class="mt-4">
    <b-row>
      <b-col sm="9" order-sm="1" order="2">
        <b-tabs pills>
          <b-tab title="Favorited Articles" active variant="dark">
            <b-card-text>
              <Feed :server="'/articles?favorited=ah_shahsavari&'" />
            </b-card-text>
          </b-tab>
          <b-tab title="My article">
            <b-card-text>
              <Feed :server="'/articles?author=ah_shahsavari&'" />
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-col>
      <b-col sm="3" order-sm="2" order="1">
        <div class="sticky">
          <profile-card v-if="userInfo" :item="userInfo" class="mb-4" />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Feed from '~/components/Article/Feed.vue'
import ProfileCard from '~/components/Profile/ProfileCard.vue'

export default {
  middleware: 'authenticate',
  components: { ProfileCard, Feed }
}
</script>

<style></style>
