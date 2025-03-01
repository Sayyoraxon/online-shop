const API_URL = process.env.REACT_APP_API_URL;

console.log("Backend API URL:", API_URL); // Tekshirish uchun

fetch(`${API_URL}/v1/user/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: "test", password: "1234" }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Xato:", error));
