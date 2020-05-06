import axios from 'axios'

const githubApi = 'https://api.github.com/users/marinastavares'

export const getMusic = () => axios.get(githubApi).then((response) => response.data)

export const getMusics = () => axios.get(githubApi).then((response) => response.data)
