import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './index.css';


const CreateRoom = ({uuid,socket,setUser}) => {

    const [roomId,setRoomId]=useState(uuid());
    const [name,setName]=useState("");

    const navigate = useNavigate();

    const handleCreateRoom = (e) => {
        e.preventDefault();

        //{name,roomId,userId,host,presenter}
        const roomData ={
            name,
            roomId,
            userId: uuid(),
            host : true,
            presenter:true,
        };



        setUser(roomData);
        navigate(`/${roomId}`);
        console.log(roomData)
        socket.emit("userJoined",roomData);
    }
    const handleCopyRoomId = () => {
      navigator.clipboard.writeText(roomId).then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000); // Reset copy success message after 2 seconds
      });
    };

  return (
    <form className="form col-md-15 mt-10">
      <div className="form-group">
        <input
          type="text"
          className="form-control my-2 "
          value={name}
          placeholder="Enter you name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group border">
        <div className="input-group d-flex align-items-center justify-content-center  ">
          <input
            type="text"
            value={roomId}
            className="Form Control my-2 border-0"
            disabled
            placeholder="Generate room code"
          />
          <div className="input-group-append">
            <button className="btn btn-primary btn-sm me-1" 
            onClick={()=>setRoomId(uuid())} type="button">
              Generate
            </button>
            <button
              className="btn btn-outline-danger btn-sm me-1"
              type="button"
              onClick={handleCopyRoomId}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="mt-4 btn btn-primary btn-block form-control "
          onClick={handleCreateRoom}
        >
          Generate Room
        </button>
      </div>
    </form>
  );
};


export default CreateRoom;