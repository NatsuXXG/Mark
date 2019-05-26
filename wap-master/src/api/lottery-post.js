import axios from 'axios'

export function lotteryPost (url, params) {
  axios.post(url, params).then((res) => {
    console.log(res)
  }).catch((error) => {
    console.log(error)
  })
}
