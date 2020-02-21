import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://fapi.binance.com'
});

export default instance
