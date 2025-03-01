import axios from "axios"
import API_PROXY from "../pages/api/proxy"




const AuthService = {


    async userRegister(user) {
        const responce = await axios.post('/v1/user/register/', user)
        return responce.data
    },

    async userLogin(user) {
        const responce = await axios.post(`${API_PROXY}/v1/user/login/`, user)
        return responce.data
    },

    async confirmCode(code) {
        const token = localStorage.getItem("token")
        const res = await axios.post('/v1/user/confirm-code/',
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
        const res = await axios.get('/v1/user/new-confirm-code/',
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
        const responce = await axios.put('/v1/user/user-update/', data,
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
        const responce = await axios.put('/v1/user/user-update-photo/', data,
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
        const res = await axios.get('/v1/user/get-me',
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