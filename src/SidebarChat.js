import React from "react";
import "./SidebarChat.css";
import { Avatar, IconButton } from "@material-ui/core";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar src="https://www.motherhoodindia.com/wp-content/uploads/2019/02/Dr-Anurag-Jain-web.jpg" />
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>this is the last message</p>
      </div>
    </div>
  );
}

export default SidebarChat;
