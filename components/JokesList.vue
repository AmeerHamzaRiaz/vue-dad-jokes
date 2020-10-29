<template>
  <div v-if="isLoading"><p class="text-center">Please wait ...</p></div>

  <div v-else-if="data.length !== 0">
    <v-card v-for="joke in data" :key="joke.id" class="mt-20" elevation="2">
      <v-card-text class="text-center">
        {{ joke.joke }}
      </v-card-text>
      <v-card-actions>
        <nuxt-link :to="'/'+joke.id">
        <v-btn color="deep-purple lighten-2" text> View </v-btn>
        </nuxt-link>
        <v-btn color="pink accent-3" text> Save </v-btn>
      </v-card-actions>
    </v-card>
  </div>
  <div v-else>No joke found :(</div>
</template>

<script>
export default {
  name: 'JokesList',
  props: {
    data: {
      required: true,
      type: Array
    },
    isLoading: {
      required: true,
      type: Boolean
    }
  }
}
</script>

<style scoped>
.mt-20 {
  margin-bottom: 20px;
}
</style>
