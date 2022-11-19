import React, { useState, useEffect, useRef } from "react";
import socket from "../../helpers/socket";
import {UserContext} from '../../context/UserContext'
import { useContext } from "react";

const Chat = () => {

  const { user } = useContext(UserContext)

  const [message, setmessage] = useState("");
  const [messages, setmessages] = useState([]);

  useEffect(() => {
    socket.emit("connection", user);
  }, [user]);

  useEffect(() => {
    socket.on("messages", (message) => {
      setmessages([...messages, message]);
    });

    return () => {
      socket.off();
    };
  }, [messages]);

  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  const submit = (e) => {
    e.preventDefault();
    socket.emit("message", user, message);
    setmessage("");
  };

  return (
    <div>
      <div className="chat">
        {messages.map((e, i) => (
          <div key={i}>
            <div>{e.user}</div>
            <div>{e.message}</div>
          </div>
        ))}
        <div ref={divRef}></div>
      </div>
      <form onSubmit={submit}>
        <label htmlFor="">Escriba su message</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setmessage(e.target.value)}
        ></textarea>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Chat;