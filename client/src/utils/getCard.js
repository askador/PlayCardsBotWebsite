import buf from 'buffer'

const axios = require('axios').create({
  baseURL: 'http://localhost:5000/api/getCard'
})

/**
 * Получить карту по ее id
 *
 * @param {Number} id
 * @returns
 */
const getCard = (deckLink, id) => {
  return axios
    .get(`?deck=${deckLink}&card=${id}`, { responseType: 'arraybuffer' })
    .then(response => {
      let image = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ''
        )
      )
      return `data:${response.headers[
        'content-type'
      ].toLowerCase()};base64,${image}`
    })
    .catch(function (error) {
      console.log(error)
    })
}

export default getCard
