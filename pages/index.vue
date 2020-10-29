<template>
  <v-row justify="center" align="center">
    <v-col cols="6" sm="8" md="6">
      <v-text-field
        hide-details="true"
        solo
        label="Search joke ..."
        class="search"
        v-model="searchText"
      >
      </v-text-field>
    </v-col>

    <v-col cols="6" sm="8" md="6">
      <v-btn large color="primary" @click="fetchJokes"> Search </v-btn>
    </v-col>

    <v-col cols="12" sm="8" md="6">
      <h1 class="text-center">DAD JOKES</h1>
      <JokesList :data="jokes" :isLoading="isLoading"> </JokesList>
      <v-pagination
        v-show="totalPages > 1"
        v-model="page"
        :length="totalPages"
        @input="fetchJokes"
      ></v-pagination>
    </v-col>
  </v-row>
</template>

<script>
import { searchJokes } from '../api/jokesAPI'
import JokesList from '~/components/JokesList'

export default {
  components: {
    JokesList
  },
  data () {
    return {
      jokes: [],
      isLoading: true,
      searchText: '',
      page: 1,
      totalPages: 1
    }
  },
  created () {
    this.fetchJokes()
  },
  methods: {
    async fetchJokes () {
      try {
        const res = await searchJokes({ term: this.searchText, page: this.page })
        this.jokes = [...res.data.results]
        this.isLoading = false
        this.totalPages = res.data.total_pages
      } catch (error) {
        this.isLoading = false
        console.error(error)
      }
    },
    searchJokes () {
      this.totalPages = 1
      this.page = 1
      this.fetchJokes()
    }
  }
}
</script>

<style scoped>
.search {
  width: 70%;
}
</style>
