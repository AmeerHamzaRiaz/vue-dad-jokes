/* eslint-disable */
<template>
<div>
  <h1>{{ joke }}</h1>
  <nuxt-link to="/" class="link">
  <v-btn>Go back</v-btn>
  </nuxt-link>
</div>
</template>

<script>
import { getJokeByID } from '../api/jokesAPI'

export default {
  name: 'JokeDetailed',
  data () {
    return {
      joke: ''
    }
  },
  created () {
    this.getJoke()
  },
  methods: {
    async getJoke () {
      try {
        const res = await getJokeByID({ id: this.$route.params.id })
        console.log(res.data)
        this.joke = res.data.joke
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style scoped>
.link {
  text-decoration: none;
}
</style>
