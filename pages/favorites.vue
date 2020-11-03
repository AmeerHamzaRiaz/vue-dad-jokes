<template>
  <div v-if="favoriteJokes.length !== 0">
    <v-card v-for="joke in favoriteJokes" :key="joke.id" class="mt-20" elevation="2">
      <v-card-text class="text-center">
        {{ joke.joke }}
      </v-card-text>
      <v-card-actions>
        <nuxt-link class="link" :to="'/'+joke.id">
        <v-btn color="deep-purple lighten-2" text> View </v-btn>
        </nuxt-link>
        <v-btn color="pink accent-3" text @click="removeJoke(joke.id)"> Remove </v-btn>
      </v-card-actions>
    </v-card>
  </div>
  <div v-else>No Favorite Jokes :(</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Favorites',
  computed: mapGetters({
    favoriteJokes: 'jokes/getFavoriteJokes'
  }),
  methods: {
    ...mapMutations({
      removeJoke: 'jokes/removeJoke'
    })
  }
}
</script>

<style scoped>
.mt-20 {
  margin-bottom: 20px;
}
.link {
  text-decoration: none;
}
</style>
