import axios from 'axios'

const Service = axios.create({
  baseURL: 'https://620120b1fdf5090017249868.mockapi.io/api/v1/',
})

export default Service
