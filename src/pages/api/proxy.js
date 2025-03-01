export default async function handler(req, res) {
    const API_URL = "http://167.172.107.65:8000"; // Backend serveringizning aniq URL manzili
  
    // Foydalanuvchi so‘rov qilayotgan yo‘lni olish
    const endpoint = req.url.replace("/api/proxy", "");
  
    try {
      // Backend API'ga so‘rovni jo‘natish
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: req.method,
        headers: {
          "Content-Type": req.headers["content-type"] || "application/json",
          Authorization: req.headers["authorization"] || "",
        },
        body: req.method !== "GET" ? JSON.stringify(req.body) : null,
      });
  
      // Backend javobini frontendga qaytarish
      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      res.status(500).json({ error: "Server Error", details: error.message });
    }
  }
  