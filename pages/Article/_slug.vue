<template>
  <div v-if="item">
    <b-jumbotron fluid class="pb-4">
      <h1>{{ item.title }}</h1>
      <hr />
      <div class="d-flex justify-content-between">
        <AuthorBox
          v-if="item.author"
          :item="item.author"
          :created-at="item.createdAt"
        />
        <div class="d-flex">
          <b-button
            v-b-tooltip.hover
            variant="outline-dark"
            class="mr-2"
            title="Follow the author"
          >
            Follow +
          </b-button>
          <like-box
            v-b-tooltip.hover
            title="Like this article"
            :count.sync="item.favoritesCount"
            :liked.sync="item.favorited"
            :slug="$route.params.slug"
          />
        </div>
      </div>
    </b-jumbotron>
    <b-container>
      <div v-html="item.body"></div>
      <br />
      <b-badge
        v-for="tag in item.tagList"
        :key="tag"
        class="mx-1"
        :to="`/tags/list/${tag}`"
      >
        {{ tag }}
      </b-badge>
      <hr />
      <b-card title="Comment">
        <b-textarea v-model="comment" placeholder="Enter comment..." required />
        <template #footer>
          <div class="d-flex justify-content-between">
            <img
              :src="userInfo.image"
              class="rounded-circle"
              width="40"
              height="40"
            />
            <b-button @click="addComment()" variant="success">
              Add Comment
            </b-button>
          </div>
        </template>
      </b-card>
      <br />
      <b-card
        v-for="item in comments"
        :key="item.id"
        :title="item.author.name"
        class="my-3"
      >
        <p>{{ item.body }}</p>
        <template #footer>
          <div class="d-flex justify-content-between">
            <img
              :src="item.author.image"
              :alt="item.author.username"
              class="rounded-circle"
              width="40"
              height="40"
            />
            <b-button
              v-if="item.author.username == userInfo.username"
              variant="danger"
              @click="deleteComment(item.id)"
            >
              Delete
            </b-button>
          </div>
        </template>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import AuthorBox from '~/components/Article/AuthorBox.vue'
import LikeBox from '~/components/Article/LikeBox.vue'
export default {
  components: { AuthorBox, LikeBox },
  async fetch() {
    const res = await this.$axios.$get(`/articles/${this.$route.params.slug}`)
    this.item = res.article
  },
  data() {
    return {
      item: {},
      comment: '',
      comments: []
    }
  },
  mounted() {
    this.getComments()
  },
  methods: {
    async getComments() {
      await this.$axios
        .$get(`/articles/${this.$route.params.slug}/comments`)
        .then((res) => {
          this.comments = res.comments
        })
    },
    addComment() {
      this.$axios
        .$post(`/articles/${this.$route.params.slug}/comments`, {
          comment: { body: this.comment }
        })
        .then((res) => {
          this.comments.push(res)
        })
    },
    deleteComment(id) {
      if (confirm('Are you sure?')) {
        this.$axios
          .$delete(`/articles/${this.$route.params.slug}/comments/${id}`)
          .then((res) => {
            this.comments = this.comments.filter((el) => el.id !== id)
          })
      }
    }
  }
}
</script>

<style></style>
