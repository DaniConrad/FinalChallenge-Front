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

const removeItem = async (userID, itemID) => {
   return axios.delete(`${config.API_URL}/api/cart/${userID}/products/${itemID}`)
}

const postSignUp = async (newUser) => {
    return await axios.post(`${config.API_URL}/api/signup`, newUser)
}

const postProducts = async (userID, values, fd, AXIOSconfig) => {
    return await axios.post(`${config.API_URL}/api/products/${userID}/${values.name}/${values.desc}/${values.price}/${values.stock}/${values.code}`, fd, AXIOSconfig)
}

const postLogin = async (values) => {
    return  axios.post(`${config.API_URL}/api/login`, {
        username: values.username,
        password: values.password
    })
}
 
const getProfile = async (token) => {
    return axios.get(`${config.API_URL}/api/profile?secret_token=${token}`)
}

const postCheckout = async (userID) => {
    return axios.post(`${config.API_URL}/api/cart/${userID}/checkout`, {})
}

const getProducts = async () => {
    return await axios.get(`${config.API_URL}/api/products`)
}

const getProductDetail = async (itemID) => {
    return await axios.get(`${config.API_URL}/api/products/${itemID}`)
}

const getImgs = () => {
    return config.API_URL
}

const postCart = async (userID, itemToAdd) => {
    return await axios.post(`${config.API_URL}/api/cart/${userID}/products`, itemToAdd )
}

const deleteProduct = async (userID, prodID) => {
    return await axios.delete(`${config.API_URL}/api/products/${userID}/${prodID}`,  )
}

const editProduct = async (userID, prodID, updatedProduct) => {
    return await axios.put(`${config.API_URL}/api/products/${userID}/${prodID}`, updatedProduct)
}

const getOrdersByID = async (orderID) => {
    return await axios.get(`${config.API_URL}/api/orders/${orderID}/order`)
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
    getProductDetail,
    getImgs,
    postCart,
    deleteProduct,
    editProduct,
    getOrdersByID
}