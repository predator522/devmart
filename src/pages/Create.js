import { useState } from "react";
import { db, auth } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

function Create() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!auth.currentUser) {
      alert("Login first!");
      return;
    }

    await addDoc(collection(db, "services"), {
      title,
      price,
      desc,
      userEmail: auth.currentUser.email
    });

    alert("Service posted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Service</h2>

      <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
      <textarea placeholder="Description" onChange={(e) => setDesc(e.target.value)} />

      <button type="submit">Post</button>
    </form>
  );
}

export default Create;
