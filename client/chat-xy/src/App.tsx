import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Socket, io } from "socket.io-client";
import Home from "./components/Home";
import Chat from "./components/chat/Chat";

const socket: Socket = io("http://localhost:4000");

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/chat" element={<Chat socket={socket} />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
