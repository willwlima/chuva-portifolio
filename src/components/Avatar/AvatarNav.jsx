import * as React from "react";
import Avatar from "@mui/material/Avatar";
import "./AvatarNav.css";

function AvatarNav() {
  return (
    <div className="avatar">
      <p className="avatar-text-one">Bem vindo</p>
      <p className="avatar-text-email">alguem12@galoasciente.com</p>
      <Avatar alt="Remy Sharp" src="image/eu.jpeg" />
      <div className="avatar-number-avatar">
        <p>2</p>
      </div>
    </div>
  );
}

export default AvatarNav;
