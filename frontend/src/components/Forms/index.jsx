import CreateRoom from "./CreateRoom";
import JoinRoomForm from "./JoinRoom";
import "./index.css";

const Forms = ({uuid,socket,setUser}) => {
  return (
    <div className="row">
        <div className="col">
            <h1 className="text-primary fw-bold">Create room</h1>
            <CreateRoom uuid={uuid} socket={socket} setUser={setUser}/>
        </div>
        <div className="">
            <h1 className="text-primary fw-bold">Join room</h1>
            <JoinRoomForm uuid={uuid} socket={socket} setUser={setUser}/>
        </div>
    </div>
  )
}

export default Forms