import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.jikan.moe/v4/recommendations/anime"
    );
    const result = response.data;
    res.render("index.ejs", {
      res: result,
    });
  } catch (error) {
    console.log(error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.get("/characters", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.jikan.moe/v4/top/characters?page=1&limit=20"
    );
    const result = response.data;
    res.render("characters.ejs", {
      res: result,
    });
  } catch (error) {
    console.log(error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
