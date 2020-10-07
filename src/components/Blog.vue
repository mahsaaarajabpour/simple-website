<template>
  <div class="d-flex flex-row justify-content-center align-items-end blog-description">
    <div class="thumbnail caption-style">
      <div class=" caption">
        <h1><strong> <i> Title: </i> </strong> <i>{{ blog.title }}</i></h1>
        <h3><strong>Writer:</strong> {{ blog.writer }}</h3>
        <p><strong>Categories:</strong> {{ blog.categories }}</p>
        <p><strong>Content:</strong> {{ blog.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "List",
  data() {
    return {
      blog_id: this.$route.params.blog_id,
      blog: {}
    }
  },
  methods: {
    GetBlog() {
      axios.get('/posts/' + this.blog_id + '.json')
          .then(response => {
            this.blog = response.data
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
    }
  },
  created() {
    this.GetBlog()
  }
}
</script>

<style scoped>
.caption-style {
  padding: 50px;
  width: 100%;
  color: seashell;
}

.blog-description {
  height: 300px;
  background-color: #3d3d3d;
  font-family: serif;
}

</style>