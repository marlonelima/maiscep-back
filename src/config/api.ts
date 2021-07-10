import axios from 'axios'

export const ViaCepBaseUrl = 'https://viacep.com.br/ws'

export const ViaCepAPI = axios.create({ baseURL: ViaCepBaseUrl })
