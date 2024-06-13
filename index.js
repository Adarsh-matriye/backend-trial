const express = require("express");
const app = express();
const port = 3000;

// Define a route for the root URL ("/")
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.get("/atul", (req, res) => {
  res.send("Hello, Atul!");
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
