const express = require("express");
const app = express();
const port = 300;

//Use Static Files

app.use('/images', express.static("files"));


app.get("/", (req, res) => {
  res.send([
    {
      author: "Image Shandlani",
      age: 28,
    },
  ]);
});

app.post("/save", (req, res) => {
  res.send("You Saves a Post");
});

app.put("/put", (req, res) => {
  res.send("You Put Something");
});

app.delete("/remove", (req, res) => {
  res.send("Deleted");
});

app.listen(port, () => {
  console.log("App Listinging on PORT:" + port);
});


