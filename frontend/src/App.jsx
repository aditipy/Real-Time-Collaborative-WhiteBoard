import { Route, Routes } from "react-router-dom";
import Forms from "./components/Forms/index.jsx";
import RoomPage from "./pages/RoomPage/RoomPage";

import io from "socket.io-client";
import { useEffect, useState } from "react";

const server = "http://localhost:5001";
const connectionOptions = {
  "force new connection": true,
  reconnectionAttempts: "Infinity",
  timout: 10000,
  transports: ["websocket"],
};

const socket = io(server,connectionOptions);


function App() {

  const [user,setUser] = useState(null);

  useEffect(()=>{
    socket.on("userIsJoined",(data)=>{
      if(data.success){
        console.log("userJoined");
      }
      else{
        console.log("userJoined error");
      }
    });
  },[]);

  const uuid = () => {
    let S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    );
  };

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Forms uuid={uuid} socket={socket} setUser={setUser} />}></Route>
        <Route path="/:roomId" element={<RoomPage user={user} socket={socket}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;