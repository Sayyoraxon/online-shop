import axios from "axios"


const API = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL, // Backend HTTP manzili
    headers: { "Content-Type": "application/json" }
});


const AuthService = {


    async userRegister(user) {
        const responce = await API.post('/register/', user)
        return responce.data
    },

    async userLogin(user) {
        const responce = await API.post(`/login/`, user)
        return responce.data
    },

    async confirmCode(code) {
        const token = localStorage.getItem("token")
        const res = await API.post('/confirm-code/',
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
        const res = await API.get('/new-confirm-code/',
            {
                headers: {
                    'Authorization': `Bearer ${token}`, // Bearer Tokenni headerda yuboramiz
                    'Content-Type': 'application/json',
                }
            })
        return res.data
    },

    async updateProfile(data) {
        const token = localStorage.getItem("token")
        const responce = await API.put('/user-update/', data,
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
        const responce = await API.put('/user-update-photo/', data,
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
        const res = await API.get('/get-me',
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            })
        return res.data

    }

}

export default AuthService