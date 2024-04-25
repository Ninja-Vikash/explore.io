const express = require("express");
const path = require("path");
const axios = require("axios"); 
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let results = [];
let searchText = ""

app.get("/", function (req, res) {
    res.render("index", {results : results, searchText : searchText});
});

app.post("/search", async function (req, res) {
  searchText = `${req.body.input}`
  const options = {
    method: "GET",
    url: "https://google-search74.p.rapidapi.com/",
    params: {
      query: `${req.body.input}`,
      limit: "10",
      related_keywords: "true",
    },
    headers: {
      "X-RapidAPI-Key": "4bdb3bac01msh32821b80254d71ap1332aejsn68d26abd9aa9",
      "X-RapidAPI-Host": "google-search74.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    results = response.data.results
    res.redirect("/");
  } catch (error) {
    console.error(error);
  }
});

app.listen(3000);
