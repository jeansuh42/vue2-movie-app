<template>
  <div>
    <div
      v-for="movie in movies"
      :key="movie.imdbID">
      {{ movie.Title }}
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('movie', [
      // index.js에 정의되어 있음
      'movies'
    ])
    
  }
}
</script>