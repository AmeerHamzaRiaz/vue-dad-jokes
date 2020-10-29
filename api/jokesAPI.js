import axios from 'axios'

const headers = { Accept: 'application/json' }

const axiosInstance = axios.create({
  baseURL: 'https://icanhazdadjoke.com',
  headers
})

const get = async (url, params = {}) => (await axiosInstance.get(url, { params }))

export const searchJokes = data => get('search', data)

export const getJokeByID = data => get(`j/${data.id}`)
