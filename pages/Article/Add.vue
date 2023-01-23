<template>
  <b-container>
    <b-row align-h="center" class="mt-5">
      <b-col sm="8">
        <b-card>
          <b-card-body>
            <b-form @submit.prevent="addArticle()">
              <h3>Write article</h3>
              <hr />
              <label for="title">Title</label>
              <b-input
                v-model="model.title"
                type="text"
                name="title"
                placeholder="Article title... "
                required
              />
              <br />
              <label for="Description">Description</label>
              <b-input
                v-model="model.description"
                type="text"
                name="description"
                placeholder="Article description... "
                required
              />
              <br />
              <label for="body">Content</label>
              <b-textarea
                v-model="model.body"
                type="text"
                name="body"
                rows="10"
                placeholder="Article content... "
                required
              />
              <br />
              <label for="tags-basic">Type a new tag and press enter</label>
              <b-form-tags
                input-id="tags-basic"
                v-model="model.tagList"
              ></b-form-tags>
              <br />
              <b-button type="submit" variant="success">Publish</b-button>
            </b-form>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  middleware: 'authenticate',
  data() {
    return {
      model: {}
    }
  },
  methods: {
    async addArticle() {
      await this.$axios.$post('/articles', { article: { ...this.model } })
    }
  }
}
</script>
