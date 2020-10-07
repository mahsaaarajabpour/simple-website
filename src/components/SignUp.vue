<template>
  <div class="body">
    <div class="container">
      <h4>sign up component</h4>
      <div class="col-lg-10 col-md-10 col-sm-12 concentrated" v-if="this.$store.state.userLogin===false">
        <form class="form-horizontal" @submit.prevent="SignUp">
          <fieldset class="wraper">
            <div class="form-group">
              <label for="name" class="col-lg-3 col-md-3 col-sm-3 control-label">Name: *</label>
              <input type="text" id="name" class="col-lg-8 col-md-8 col-sm-8" v-model="userInfo.name" required>
            </div>
            <div class="form-group">
              <label for="last-name" class="col-lg-3 col-md-3 col-sm-3 control-label">Last name: *</label>
              <input type="text" id="last-name" class="col-lg-8 col-md-8 col-sm-8" v-model="userInfo.lastName" required>
            </div>
            <div class="form-group">
              <label for="email" class="col-lg-3 col-md-3 col-sm-3 control-label">Email: *</label>
              <input type="email" id="email" class="col-lg-8 col-md-8 col-sm-8" :class="{error:emailError}"
                     v-model="userInfo.email" required>
              <p v-if="emailError" style="color: red">Your email has already been entered</p>
            </div>
            <div class="form-group">
              <label for="pass" class="col-lg-3 col-md-3 col-sm-3 control-label">Password: *</label>
              <input type="password" id="pass" class="col-lg-8 col-md-8 col-sm-8" v-model="userInfo.password" required>
            </div>
            <div class="form-group">
              <label for="gender" class="col-lg-3 col-md-3 col-sm-3 control-label">Gender: </label>
              <div class="col-lg-8 col-md-8 col-sm-8 form-check form-check-inline" id="gender">
                <label for="female" class="form-check-label">
                  <input type="radio" id="female" value="female" class=" form-check-input" v-model="userInfo.gender">
                  female
                </label>
                <label for="male" class=" form-check-label">
                  <input type="radio" id="male" value="male" class=" form-check-input" v-model="userInfo.gender">male
                </label>
                <label for="other" class=" form-check-label">
                  <input type="radio" id="other" value="other" class=" form-check-input" v-model="userInfo.gender">other
                </label>
              </div>
            </div>
            <div class="form-group col-lg-3 col-md-3 col-sm-3 concentrated">
              <button id="submit-btn" name="submit-btn" class="btn btn-primary sign-up-btn btn-block"> Sign Up</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
    <div v-if="this.$store.state.userLogin" class="alert-success col-lg-6 col-md-8 col-sm-10 concentrated">
      <h3> Hi {{ this.$store.state.userInfo.name }},</h3>
      <h3> you are login!</h3>
      <hr>
      <p>click to <a @click="logOut">log out!</a></p>
    </div>
  </div>
</template>

<script>
import login from 'axios'
import {mapActions} from "vuex";

export default {
  name: "Login",
  data() {
    return {
      userInfo: {
        name: '',
        lastName: '',
        email: '',
        password: null,
        gender: ''
      },
      info: [],
      emailError: false,
    }
  },
  methods: {
    ...mapActions(['UserLogin']),
    SignUp() {
      login.get('https://login-db-4505d.firebaseio.com/posts.json')
          .then(response => {
            this.emailError = false
            for (let key in response.data) {
              response.data[key].id = key
              if (response.data[key].email == this.userInfo.email) {
                this.emailError = true
                return
              }
              this.info.push(response.data[key])
            }
            if (this.emailError === false) {
              login.post('https://login-db-4505d.firebaseio.com/posts.json', this.userInfo)
                  .then(response => {
                    if (response.data != null) {
                      this.UserLogin(true)
                      this.$store.state.userInfo = this.userInfo
                      console.log(response)
                      console.log('1', this.$store.state.userInfo)
                    }
                  })
                  .catch(error => {
                    console.log(error)
                  })
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

.wraper {
  padding: 80px;
  background-color: #ddd;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 200;
}

</style>