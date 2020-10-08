<template>
  <div class="body">
    <div class="container">
      <div v-if="this.$store.state.userLogin==false" class="col-lg-6 col-md-8 col-sm-12  concentrated ">
        <p class="alert-danger">the axios of this sample, working with <a href="https://firebase.google.com/"
                                                                       target="_blank">Firebase</a>, so if you can't
          login or anything,please first open your vpn!</p>
        <br>
        <fieldset>
          <div class="form-group">
            <input type="email" class="form-control" :class="{error:!verifyEmail}" placeholder="please enter your email"
                   v-model="userEmail">
            <p v-if="!verifyEmail" class="errorMessage"> your email is incorrect </p>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" :class="{error:!verifyPass}"
                   placeholder="please enter your password" v-model="userPass">
            <p v-if="!verifyPass" class="errorMessage"> your pass is incorrect </p>
          </div>
          <div class="form-group">
            <button class="btn btn-primary" @click="login">Login</button>
            <p style="font-size: small">This is your first time?
              <router-link to="/sign-up">Create new account</router-link>
            </p>
          </div>
        </fieldset>
      </div>
      <div v-else class="alert-success col-lg-6 col-md-8 col-sm-12  concentrated">
        <h3> Hi {{ this.$store.state.userInfo.name }} ,</h3>
        <h3> you are login!</h3>
        <hr>
        <p>click to <a @click="logOut">log out!</a></p>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      userEmail: '',
      userPass: '',
      verifyEmail: false,
      verifyPass: false,
    }
  },
  methods: {
    login() {
      axios.get('https://login-db-4505d.firebaseio.com/posts.json')
          .then(response => {
            this.verifyEmail = false
            for (let key in response.data) {
              if (this.userEmail === response.data[key].email) {
                this.verifyEmail = true
                // console.log('email-true')
                if (this.userPass === response.data[key].password) {
                  this.verifyPass = true
                  // console.log('pass-true')
                  this.$store.state.userInfo = response.data[key]
                }
              }
            }
            if (this.verifyEmail && this.verifyPass) {
              return this.$store.state.userLogin = true
            }
          })
          .catch(err => {
            console.log(err)
          })
    },
    logOut() {
      return this.$store.state.userLogin = false
    }
  },
}
</script>

<style scoped>
</style>