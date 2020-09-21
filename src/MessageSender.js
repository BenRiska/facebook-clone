import React from "react";
import VideoCamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { Avatar } from "@material-ui/core";
import "./messagesender.css";

function MessageSender() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="messagesender">
      {/*Header Top*/}
      <div className="messagesender__top">
        <Avatar />
        <form>
          <input
            className="messagesenderinput"
            placeholder="What's on your mind"
          />
          <input placeholder="Image URL (Optional)" />
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
