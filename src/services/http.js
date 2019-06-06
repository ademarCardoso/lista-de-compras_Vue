import axios from 'axios'

export default axios.create({
  baseURL: 'https://northwind.now.sh/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
})
