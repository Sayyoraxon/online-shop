import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL;

console.log("Backend API URL:", API_URL); // Tekshirish uchun

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

// Agar SSL sertifikat noto‘g‘ri bo‘lsa (faqat test uchun)
api.defaults.httpsAgent = new (require('https').Agent)({ rejectUnauthorized: false });



const AuthService = {


    async userRegister(user) {
        const responce = await axios.post('/v1/user/register/', user)
        return responce.data
    },

    async userLogin(user) {
        const responce = await api.post(`${API_URL}/v1/user/login/`, user)
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