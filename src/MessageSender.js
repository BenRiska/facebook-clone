import React, { useState } from "react";
import VideoCamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";
import "./messagesender.css";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();

    // db handling

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageURL,
    });

    setInput("");
    setImageURL("");
  };
  return (
    <div className="messagesender">
      {/*Header Top*/}
      <div className="messagesender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            className="messagesender__input"
            placeholder={`What's on your mind. ${user.displayName}?`}
            onChange={(e) => setInput(e.currentTarget.value)}
          />
          <input
            value={imageURL}
            onChange={(e) => setImageURL(e.currentTarget.value)}
            placeholder="Image URL (Optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      {/*Header Bottom*/}
      <div className="messagesender__bottom">
        <div className="messagesender__option">
          <VideoCamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messagesender__option">
          <PhotoLibraryIcon style={{ color: "green " }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messagesender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
