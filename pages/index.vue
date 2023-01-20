<template>
  <b-container>
    <Intro />
    <br />
    <b-row>
      <b-col sm="9">
        <Feed :title="'Global Feed'" />
      </b-col>
      <b-col sm="3">
        <div class="sticky">
          <Tags :title="'Popular Tags'" />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Feed from '~/components/Article/Feed.vue'
import Intro from '~/components/Intro.vue'
import Tags from '~/components/Tags.vue'

export default {
  components: { Intro, Feed, Tags }
}
</script>

<style></style>
