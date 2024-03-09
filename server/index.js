const express = require("express");
const app = express();
const PORT = 4000;

const http = require("http").Server(app);
const cors = require("cors");

app.use(cors());

const socketIo = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:5173",
  },
});

socketIo.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  // listens and logs message to console
  socket.on("message", (data) => {
    socketIo.emit("messageResponse", data);
  });

  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});

app.get("/api", (req, res) => {
  res.json({
    message: "hello world",
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
