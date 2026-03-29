const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/fetch", async (req, res) => {
  try {
    const url = req.query.url;
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
        "Accept": "text/html"
      }
    });
    const html = await response.text();
    res.send(html);
  } catch (e) {
    res.status(500).send("Error: " + e.message);
  }
});

app.listen(process.env.PORT || 3000, () => console.log("Proxy running!"));
