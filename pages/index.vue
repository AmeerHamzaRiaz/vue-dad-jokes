/* eslint-disable */
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
      <v-btn large color="primary" @click="onSearch"> Search </v-btn>
    </v-col>

    <v-col cols="12" sm="8" md="6">
      <h2 class="text-center">Search Results</h2>
      <JokesList :data="jokes" :isLoading="isLoading"> </JokesList>
      <v-pagination
        v-show="totalPages > 1"
        :value="page"
        :length="totalPages"
        @input="onPaginate"
      ></v-pagination>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import JokesList from '~/components/JokesList'

export default {
  components: {
    JokesList
  },
  data () {
    return {
      searchText: ''
    }
  },
  created () {
    const payload = { page: this.page, term: this.searchText }
    this.fetchJokes(payload)
  },
  methods: {
    ...mapActions({
      fetchJokes: 'jokes/getJokes'
    }),
    onSearch () {
      const payload = { page: 1, term: this.searchText }
      this.fetchJokes(payload)
    },
    onPaginate (pageNum) {
      const payload = { page: pageNum, term: this.searchText }
      this.fetchJokes(payload)
    }
  },
  computed: mapGetters({
    isLoading: 'jokes/getLoading',
    jokes: 'jokes/getJokes',
    page: 'jokes/getPage',
    totalPages: 'jokes/getTotalPages'
  })
}
</script>

<style scoped>
.search {
  width: 70%;
}
</style>
