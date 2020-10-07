<template>
  <div class="body">
    <div class="container">
      <div class="home ">
        <div v-if="this.$store.state.error && this.Num===''">
          <h4 class="alert alert-danger"> {{ $store.state.errorMessage }}</h4>
        </div>
        <div class="col-md-6 col-md-push-4">

          <button @click="Decrement"> -</button>
          <input type="text" placeholder="enter your number!" v-model="Num">
          <button @click="Increment"> +</button>
        </div>
        <div class="calculate ">
          <display-num></display-num>
          <!--            <display-num   :errorMessage="errorMessage"-->
          <!--                         @errorMessage="errorMessage =$event"></display-num>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DisplayNum from "./DisplayNum";
import {mapActions} from 'vuex'

export default {
  name: 'Counter',
  components: {DisplayNum},
  computed: {
    Num: {
      get() {
        return this.$store.getters.Num
      },
      set(value) {
        return this.$store.dispatch('Num', value)
      }
    },
  },
  methods: {
    ...mapActions(['Increment', 'Decrement']),
  },
}
</script>

<style scoped>

.home {
  padding-top: 3%;
}

.calculate {
  padding-top: 20px;
}

.warning {
  color: red;
}

.success {
  color: green;
}
</style>
