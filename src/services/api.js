// Axios es una biblioteca para trabajar con solicitudes HTTP, como post, get, ..
import axios from "axios"

export const api = axios.create({
  baseURL: "http://localhost:3333"
})

