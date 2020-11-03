import { searchJokes } from '../api/jokesAPI'

export const state = () => ({
  favoriteJokes: [],
  jokes: [],
  isLoading: true,
  page: 1,
  totalPages: 1
})

// sync
export const mutations = {
  removeJoke (state, id) {
    state.favoriteJokes = state.favoriteJokes.filter(i => i.id !== id)
  },
  getJokes (state, data) {
    state.jokes = [...data.results]
    state.isLoading = false
    state.page = data.current_page
    state.totalPages = data.total_pages
  },
  addJoke (state, id) {
    const newJoke = state.jokes.find(i => i.id === id)
    state.favoriteJokes.push(newJoke)
  }
}

// async
export const actions = {
  async getJokes ({ commit }, payload) {
    try {
      const res = await searchJokes(payload)
      commit('getJokes', res.data)
    } catch (error) {
      console.error(error)
    }
  }
}

export const getters = {
  getFavoriteJokes: state => state.favoriteJokes,
  getJokes: state => state.jokes,
  getLoading: state => state.isLoading,
  getPage: state => state.page,
  getTotalPages: state => state.totalPages
}
