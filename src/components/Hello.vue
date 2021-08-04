<template>
  <div> 
    <button
      class="btn btn-primary"
      @click="fetchMovie">
      Get Movie!
    </button>
    <h1>{{ title }} </h1>
    <p>{{ director }} </p>
    <img
      :src="poster" 
      alt="img" />
  </div>

  <!-- <div>
    <h1
      id="Hello"
      class="Hello"
      title="Hello"
      @click="reverseMsg">
      {{ msg }}
    </h1>
    <button class="btn btn-primary">
      Hello Boot !
    </button>
  </div> -->
</template>

<style lang="scss" scoped>
  h1{
    $color: red;
    background-color: $color;
    display: flex;
  }

</style>


<script>
// import { mapState } from 'vuex'

export default {
  data(){
    return{
      title: '',
      poster: '',
      director: ''
    }
  },
  computed: {
    msg() {
      return this.$store.state.message.msg
    },
    reversedMsg(){
      return this.$store.getters['message/reversedMsg']
    }
  },
  methods: {
    updateMsg(){
      this.$store.commit('message/updateMsg', '1234')
    },
    reverseMsg(){
      this.$store.dispatch('message/reverseMsg')
    },
    async fetchMovie() {
      const res = await fetch('http://www.omdbapi.com/?apikey=7035c60c&i=tt3896198')
      const movie = await res.json()
      console.log(movie)
      this.title = movie.Title
      this.director = movie.Director
      this.poster = movie.Poster 
      }
    }
  }
</script>


