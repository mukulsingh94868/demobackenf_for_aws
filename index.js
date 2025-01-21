const express = require("express");
const app = express();
const port = 3000;

app.get("/aws", (req, res) => {
  res.send("Hello, AWS EC2! hello world");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
