import React, { useState, useEffect, useRef } from "react";
import socket from "../../helpers/socket";
import {UserContext} from '../../context/UserContext'
import { useContext } from "react";

const Chat = () => {

  const { user } = useContext(UserContext)

  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    socket.emit("conectado", user);
  }, [user]);

  useEffect(() => {
    socket.on("mensajes", (mensaje) => {
      setMensajes([...mensajes, mensaje]);
    });

    return () => {
      socket.off();
    };
  }, [mensajes]);

  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  const submit = (e) => {
    e.preventDefault();
    socket.emit("mensaje", user, mensaje);
    setMensaje("");
  };

  return (
    <div>
      <div className="chat">
        {mensajes.map((e, i) => (
          <div key={i}>
            <div>{e.user}</div>
            <div>{e.mensaje}</div>
          </div>
        ))}
        <div ref={divRef}></div>
      </div>
      <form onSubmit={submit}>
        <label htmlFor="">Escriba su mensaje</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        ></textarea>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Chat;