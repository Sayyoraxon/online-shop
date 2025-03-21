import axios from "axios"


const API = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'https://buyze.uz/',
    headers: { "Content-Type": "application/json" }
});


const AuthService = {


    async userRegister(user) {
        const responce = await API.post('/v1/user/register/', user)
        return responce.data
    },

    async userLogin(user) {
        const responce = await API.post(`/v1/user/login/`, user)
        return responce.data
    },

    async confirmCode(code) {

        const token = localStorage.getItem("token")

        const res = await API.post('/v1/user/confirm-code/',
            code,
            {
                headers: {
                    'Authorization': `Bearer ${token}`, // Bearer Tokenni headerda yuboramiz
                    'Content-Type': 'application/json',
                }
            })
        return res.data
    },

    async newConfirmCode() {

        const token = localStorage.getItem("token")

        const res = await API.get('/v1/user/new-confirm-code/',
            {
                headers: {
                    'Authorization': `Bearer ${token}`, // Bearer Tokenni headerda yuboramiz
                    'Content-Type': 'application/json',
                }
            })
        return res.data
    },

    async forgetPassword(email) {
        const responce = await API.post('/v1/user/password/reset/', email)
        return responce.data
    },

    async resetPassword(data) {
        const responce = await API.post('/v1/user/password/reset/confirm/', data)
        return responce.data
    },

    async updateProfile(data) {

        const token = localStorage.getItem("token")

        const responce = await API.put('/v1/user/user-update/', data,
            {
                headers: {
                    'Authorization': `Bearer ${token}`, // Bearer Tokenni headerda yuboramiz
                    'Content-Type': 'application/json',
                }
            })
        return responce.data
    },

    async updatePhoto(data) {

        const token = localStorage.getItem("token")

        const responce = await API.put('/v1/user/user-update-photo/', data,
            {
                headers: {
                    'Authorization': `Bearer ${token}`, // Bearer Tokenni headerda yuboramiz
                    'Content-Type': 'multipart/form-data',
                }
            })
        return responce.data
    },

    async getUser() {

        const token = localStorage.getItem("token")

        const res = await API.get('/v1/user/get-me',
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            })
        return res.data

    },

    async deleteAccount() {

        const token = localStorage.getItem("token")

        const res = await API.delete('/v1/user/me/delete/',
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            })
        return res.data
    },

    async createShop(data) {

        const token = localStorage.getItem("token")

        const res = await API.post('/v1/shopper/shop-create-list/', data,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            })

        return res
    },

    async addProduct(data) {

        const token = localStorage.getItem("token")

        const res = await API.post('/v1/shopper/product-create/', data,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': "multipart/form-data",
                }
            })

        return res
    },

    async getProducts() {
        const token = localStorage.getItem("token")
        const id = localStorage.getItem("shopId")

        const res = await API.get(`/v1/shopper/shop/${id}/products/`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': "application/json",
                }
            })

        return res
    },

    async updateProduct(slug, data) {
        const token = localStorage.getItem("token")

        const res = await API.put(`/v1/shopper/product/update/${slug}/`, data,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': "application/json",
                }
            })

        return res
    },

    async getAllProducts() {
        const token = localStorage.getItem("token")

        const res = await API.get(`/v1/customer/product-list/`)

        return res
    },

    async getProduct(slug) {

        const res = await API.get(`/v1/customer/product/${slug}/`)

        return res
    }
}

export default AuthService