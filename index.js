import express from "express"
import cors from "cors"
import { getCompletion, getResponse } from "./utils.js"

const app = express();

// middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/chat", async (req, res) => {
  const { message } = req.body;
  // const botResponse = await getCompletion(message);
  const botResponse = await getResponse(message);
  res.json({ response: botResponse });
});


// start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
