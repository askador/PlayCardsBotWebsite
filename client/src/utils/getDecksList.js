const axios = require('axios').create({
  baseURL: 'http://localhost:5000/api/getDecksList'
})

/**
 * Загрузить список колод
 */
const getDecksList = () => {
  return axios.get('/').catch(function (error) {
    console.log(error)
  })
}

export default getDecksList
