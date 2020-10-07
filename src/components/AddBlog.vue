<template>
  <div class="body">
    <div class="container">
      <h4>adding a blog with firebase & axios</h4>
      <div class="col-lg-8 col-md-10 col-sm-12 concentrated">
        <form class="form-horizontal" @submit.prevent="AddBlog" v-if="!this.submitted">
          <fieldset class="wraper" :disabled="!$store.state.userLogin">
            <div class=" concentrated"
                 v-if="!$store.state.userLogin|| this.checkInput.category || this.blog.title=='' || this.blog.content=='' || this.blog.categories == ''">
              <pre class="alert-danger" id="login-error-blog"><p v-if="!$store.state.userLogin">to add a blog, please <a
                  href="/">login</a> first.</p><p
                  v-if="this.blog.title=='' ||  blog.content=='' || this.blog.categories == ''"> please fill in the blank.</p></pre>
            </div>
            <!--title-->
            <div class="form-group">
              <label for="title" class="col-lg-3 col-md-3 col-sm-3 control-label"> title: * </label>
              <input class="col-lg-8 col-md-8 col-sm-8" type="text" id="title" v-model="blog.title" required>
            </div>
            <!--content-->
            <div class="form-group">
              <label for="content" class="col-lg-3 col-md-3 col-sm-3 control-label"> content: *</label>
              <textarea class="col-lg-8 col-md-8 col-sm-8" rows="8" type="text" id="content" v-model="blog.content"
                        placeholder="please enter your content" required></textarea>
            </div>
            <!--categories-->
            <div class="form-group row" id="checkboxes-div">
              <label class="col-lg-3 col-md-3 col-sm-3 control-label" for="checkboxes">select categories: *</label>
              <div class="col-lg-8 col-md-8 col-sm-8" id="checkboxes">
                <div class="form-check form-check-inline">
                  <input class=" form-check-input" id="checkboxes-0" type="checkbox" value="back-end"
                         v-model="blog.categories">
                  <label class=" form-check-label" for="checkboxes-0">back-end</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class=" form-check-input" id="checkboxes-1" type="checkbox" value="front-end"
                         v-model="blog.categories">
                  <label class="form-check-label" for="checkboxes-1">front-end</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class=" form-check-input" id="checkboxes-2" type="checkbox" value="cook"
                         v-model="blog.categories">
                  <label class=" form-check-label" for="checkboxes-2">cook</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class=" form-check-input" id="checkboxes-3" type="checkbox" value="business"
                         v-model="blog.categories">
                  <label class=" form-check-label" for="checkboxes-3">business</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class=" form-check-input" id="checkboxes-4" type="checkbox" value="sport"
                         v-model="blog.categories">
                  <label class=" form-check-label" for="checkboxes-4">sport</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class=" form-check-input" id="checkboxes-5" type="checkbox" value="manage"
                         v-model="blog.categories">
                  <label class=" form-check-label" for="checkboxes-5">manage</label>
                </div>
              </div>
            </div>
            <hr>
            <!--preview-->
            <div class="form-group preview" style="background-color: #f6f6f6">
              <div class="col-lg-10 col-md-10 col-sm-12">
                <h3> preview of yours:</h3>
                <div class="row">
                  <div class="col-lg-4 col-md-4 col-sm-4 bold">
                    <p>title:</p>
                  </div>
                  <div class="col-lg-8 col-md-8 col-sm-8">
                    <p>{{ blog.title }}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-4 col-md-4 col-sm-4 bold">
                    <p>content:</p>
                  </div>
                  <div class="col-lg-8 col-md-8 col-sm-8">
                    <p>{{ blog.content }}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-4 col-md-4 col-sm-4 bold">
                    <p>categories:</p>
                  </div>
                  <div class="col-lg-8 col-md-8 col-sm-8">
                    <ul class="categories-preview">
                      <li v-for="category in blog.categories" :key="category">
                        {{ category }}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-4 col-md-4 col-sm-4 bold">
                    <p>writer:</p>
                  </div>
                  <div class="col-lg-8 col-md-8 col-sm-8">
                    <p>{{ blog.writer }}</p>
                  </div>
                </div>
              </div>
            </div>
            <!--button-->
            <div class="form-group">
              <div class="col-lg-4 col-md-4 col-sm-4">
                <button id="submit-btn" name="submit-btn" class="btn btn-primary">submit</button>
              </div>
            </div>
          </fieldset>
        </form>
        <div class="col-lg-10 col-md-10 col-sm-12 concentrated" v-if="this.submitted==200">
          <pre class="alert-success"><h3> your blog was post</h3></pre>
          <div class="form-group preview preview-box">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <h3><i>preview of yours:</i></h3><br>
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 bold ">
                  <p>title:</p>
                </div>
                <div class="col-lg-8 col-md-8 col-sm-8">
                  <p>{{ blog.title }}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 bold">
                  <p>content:</p>
                </div>
                <div class="col-lg-8 col-md-8 col-sm-8">
                  <p>{{ blog.content }}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 bold">
                  <p>categories:</p>
                </div>
                <div class="col-lg-8 col-md-8 col-sm-8">
                  <ul class="categories-preview">
                    <li v-for="category in blog.categories" :key="category">
                      {{ category }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 bold">
                  <p>writer:</p>
                </div>
                <div class="col-lg-8 col-md-8 col-sm-8">
                  <p>{{ blog.writer }}</p>
                </div>
              </div>
            </div>
          </div>
          <!--  <router-link to="/add-blog">Go back</router-link>-->
        </div>
        <div class="col-lg-8 col-md-10 col-sm-12 concentrated" v-if="this.submitted==401">
          <pre class="alert-danger"><h4> your blog was not post!</h4></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {

  name: "AddBlog",
  data() {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        writer: this.$store.state.userInfo.name + ' ' + this.$store.state.userInfo.lastName,
      },
      submitted: false,
      checkInput: {
        category: false,
      },
    }
  },
  methods: {
    AddBlog() {
      this.checkInput.category = false;
      if (this.blog.categories == '' || this.blog.categories == null) {
        this.checkInput.category = true;
        return;
      } else {
        axios.post('/posts.json', this.blog)
            .then(response => {
              this.submitted = response.status
            })
            .catch(error => {
              this.submitted = 401,
                  console.log(error.response)
            })
      }
    },
  },
}
</script>

<style scoped>
.pp {
  text-align: center;
}

.wraper {
  padding: 60px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 5px;
}

#checkboxes-div,
#writer-div {
  margin-left: 0%;
  margin-right: 0%;
}

#checkboxes,
#writers {
  padding-left: 0%;
  padding-right: 0%;
}

.preview {
  background: #252425;
  margin: 5px !important;
  border: 1px;
  border-radius: 5px;
  color: #C2CCC5;
}

.categories-preview {
  padding-left: 15px;
}

.preview-box {
  padding: 30px;
}

.bold p {
  font-weight: 800;
}

#login-error-blog {
  padding: 15px;
}

#login-error-blog p {
  margin: 0;
}
</style>