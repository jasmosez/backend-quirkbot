import express from "express"
import cors from "cors"

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

app.post("/chat", (req, res) => {
  const { message } = req.body;
  res.json({ response: `Quirkbot said: Lol. you said: ${message}` });
});


// start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
