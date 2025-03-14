import express from "express"

const app = express();

// Add logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
