<template>
  <div id="app">
    <navbar></navbar>
    <!-- <main> -->
    <router-view></router-view>
    <!-- </main> -->
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Footer from "./Footer";

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
html {

  /* background-color: #928A74;
  background-color: #C2CCC5;
  background-color: #C2983D;
  background-color: #303D38;
  background-color: #252425; */

  height: 100%;
}

body {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #928A74;
  color: #252425;
}

.concentrated {
  margin: auto;
  display: block;
}

.container {
  padding-top: 70px;
}

.body {
  padding-bottom: 50px;
}

.alert-success {
  padding: 30px;
  text-align: center;
  border-radius: 15px;
  background-color: #303D38;
  color: #C2CCC5;
}

.alert-danger {
  padding: 30px;
  text-align: center;
  border-radius: 15px;
  color: red;
}

.errorMessage {
  color: red;
}

.error {
  border: 1px solid red;
  border-radius: 5px;
}
</style>
