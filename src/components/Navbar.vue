<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/"><strong>Vue.Js</strong></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class=" navbar-nav mr-auto ">
          <li class=" nav-item">
            <router-link to="/todo" class=" nav-link">ToDo</router-link>
          </li>
          <li class=" nav-item">
            <router-link to="/add-blog" class="nav-link"> AddBlog</router-link>
          </li>
          <li class=" nav-item">
            <router-link to="/blogs" class="nav-link">Blogs</router-link>
          </li>
          <!-- <li class=" nav-item">
              <router-link class="nav-link" to="/counter" active-class="active" exact>Counter</router-link>
          </li> -->
        </ul>
        <form class="form-inline">
          <div v-if="this.$store.state.userLogin">
            <p> hi {{ this.$store.state.userInfo.name }}</p>
            <a class="log-out" @click="logOut">click to log out!</a>
          </div>
          <div v-else>
            <router-link to="/">Looking for help logging in?</router-link>
          </div>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logOut() {
      return this.$store.state.userLogin = false
    }
  }
}
</script>

<style scoped>
.container-fluid {
  padding-left: 0;
}

.navbar {
  background-color: #111111;
  padding: 0;
}

.navbar-nav a:hover {
  color: #c2ccc5;
  background-color: #C2983D;
}

.navbar-brand {
  background-color: #e09b06;
  height: 76px;
  scroll-padding-bottom: 0;
  margin: 0;
  line-height: 70px;
  padding: 0 15px;
}

.navbar-toggler {
  background-color: #e09b06;
}

.navbar-dark .navbar-nav .nav-link,
a {
  color: #c2ccc5;
}

.nav-link {
  line-height: 60px;
}

p,
.log-out {
  color: #c2ccc5;
  font-size: small;
}
</style>