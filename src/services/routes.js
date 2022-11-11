import axios from "axios"
import { config } from "../config/config"

const logout = async () => {
    return axios.get(`${config.API_URL}/api/logout`)
}

const getOrdersByUserID = async (userID, SetOrders) => {
    axios.get(`${config.API_URL}/api/orders/${userID}`)
                .then((res) => SetOrders(res.data))
                .catch(err => console.log(err))
}

const getCart = async (userID) => {
    return axios.get(`${config.API_URL}/api/cart/${userID}/products`)
}

const removeItem = (userID, itemID) => {
   return axios.delete(`${config.API_URL}/api/cart/${userID}/products/${itemID}`)
}

const postSignUp = (newUser) => {
    return axios.post(`${config.API_URL}/api/signup`, newUser)
}

const postProducts = (values, fd, config) => {
    return axios.post(`${config.API_URL}/api/products/${values.name}/${values.desc}/${values.price}/${values.stock}/${values.code}`, fd, config)
}

const postLogin = (values) => {
    return  axios.post(`${config.API_URL}/api/login`, {
        username: values.username,
        password: values.password
    })
}
 
const getProfile = (token) => {
    return axios.get(`${config.API_URL}/api/profile?secret_token=${token}`)
}

const postCheckout = (userID) => {
    return axios.post(`${config.API_URL}/api/cart/${userID}/checkout`, {})
}

const getProducts = () => {
    return axios.get(`${config.API_URL}/api/products`)
}

const getProductDetail = (itemID) => {
    return axios.get(`${config.API_URL}/api/products/${itemID}`)
}

export {
    getOrdersByUserID,
    logout,
    getProfile,
    getCart,
    removeItem,
    postSignUp,
    postProducts,
    postLogin,
    postCheckout,
    getProducts,
    getProductDetail
}