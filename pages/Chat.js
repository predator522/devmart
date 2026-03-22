import { useState } from "react";
import { db, auth } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

function Chat() {
  const [msg, setMsg] = useState("");

  const sendMessage = async () => {
    await addDoc(collection(db, "messages"), {
      text: msg,
      user: auth.currentUser.email,
      time: new Date()
    });
    setMsg("");
  };

  return (
    <div>
      <h2>Chat</h2>

      <input value={msg} onChange={(e) => setMsg(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chat;
