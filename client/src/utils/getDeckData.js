const axios = require('axios').create({
  baseURL: 'http://localhost:5000/api/getDeckData'
})

/**
 * Получить данные колоды
 *
 * @param {string} link
 * @returns
 */
const getDeckData = link => {
  return axios.get(`${link}`).catch(function (error) {
    console.log(error)
  })
}

export default getDeckData
