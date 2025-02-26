export const setItem = (token, boolean) => {
    localStorage.setItem("token", token)
    localStorage.setItem("loggedIn", boolean)
}

export const logOut = () => {
    localStorage.clear()
}