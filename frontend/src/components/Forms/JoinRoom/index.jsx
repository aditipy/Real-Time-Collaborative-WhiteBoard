import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './index.css';

const JoinRoomForm = ({socket,setUser,uuid}) => {

    const[roomId,setRoomId] = useState("");
    const[name,setName] = useState("");

    const navigate = useNavigate();

    const handleRoomJoin =(e) =>{
        e.preventDefault();

        const roomData ={
            name,
            roomId,
            userId: uuid(),
            host : false,
            presenter:false,
        };

        setUser(roomData);
        navigate(`/${roomId}`);
        socket.emit("userJoined",roomData);
    }

  return (
    <form className="form col-md-15 mt-10">
      <div className="form-group">
        <input
          type="text"
          className="form-control my-2 "
          placeholder="Enter you name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <input
          type="text"
          className="form-control my-2 "
          placeholder="Enter room code "
          value={roomId}
          onChange={(e)=>setRoomId(e.target.value)}
        />
      </div>

      <div>
        <button
          type="submit"
          onClick={handleRoomJoin}
          className="mt-4 btn btn-primary btn-block form-control "
        >
          Join Room
        </button>
      </div>
    </form>
  );
};

export default JoinRoomForm;