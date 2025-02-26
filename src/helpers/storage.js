export const setItem = (token, boolean) => {
    localStorage.setItem("token", token)
    localStorage.setItem("loggedIn", boolean)
}

export const token = (token) => {
    localStorage.setItem("token", token)
}

export const loggedIn = (boolean) => {
    localStorage.setItem("loggedIn", boolean)
}

export const logOut = () => {
    localStorage.clear()
}