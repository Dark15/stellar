import axios from 'axios'

function axiosInstance() {
  return axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

export default axiosInstance()
