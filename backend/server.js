const express = require("express");
const app = express();

const server = require("http").createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);

//routes
app.get("/", (req,res)=>{
    res.send("This is mern real-time whiteboard's server by Aditi.");
});

io.on("connection",(socket)=>{
    console.log("User connected.");
});

const port = process.env.port || 5001;
server.listen(port,()=>
console.log("server is running on http://localhost:5001")
);
