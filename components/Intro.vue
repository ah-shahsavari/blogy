<template>
  <b-row class="mt-3 mb-3" align-v="center">
    <b-col md="6">
      <IntroImageVue class="p-5" />
    </b-col>
    <b-col md="6" class="p-3">
      <h1>Blogy is a blog platform</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </b-col>
  </b-row>
</template>

<script>
import IntroImageVue from '~/components/IntroImage.vue'

export default {
  components: { IntroImageVue }
}
</script>

<style></style>
