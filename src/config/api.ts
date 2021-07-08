import axios from 'axios'

export const ViaCepAPI = axios.create({ baseURL: 'https://viacep.com.br/ws' })
