import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const server = new WebSocketServer({ port: 3001 });

server.on("connection", async (socket) => {
  try {
    await client.user.create({
      data: {
        username: Math.random().toString(),
        password: Math.random().toString(),
      },
    });

    socket.send("Hi there from WebSocket Server!");
  } catch (err) {
    socket.send("Error creating user");
  }
});

console.log("WebSocket server running on port 3001");
