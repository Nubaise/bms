import express from "express";
import { client } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello from HTTP Server!");
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  const user = await client.user.create({
    data: { username, password },
  });

  res.json({
    message: "User signed up successfully",
    id: user.id,
  });
});

app.listen(3000, () => {
  console.log("HTTP server running on port 3000");
});
