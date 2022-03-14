import axios from 'axios'

function axiosInstance() {
  return axios.create({
    baseURL: 'http://localhost:3001/api',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

export default axiosInstance()
