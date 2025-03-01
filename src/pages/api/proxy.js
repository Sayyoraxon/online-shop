export default async function handler(req, res) {
    const API_URL = "http://167.172.107.65:8000"; // Backend URL
  
    if (req.method !== "POST" && req.method !== "GET" && req.method !== "PUT") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }
  
    const endpoint = req.url.replace("/api/proxy", ""); // Asl backend endpointni olish
  
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: req.method,
        headers: {
          "Content-Type": req.headers["content-type"] || "application/json",
          Authorization: req.headers["authorization"] || "",
        },
        body: req.method !== "GET" ? JSON.stringify(req.body) : null,
      });
  
      if (!response.ok) {
        const errorData = await response.text();
        return res.status(response.status).json({ error: errorData });
      }
  
      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      res.status(500).json({ error: "Server Error", details: error.message });
    }
  }
  