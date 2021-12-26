import React from "react";
import Avatar from "../../../shared/components/UIElements/Avatar";
import "./UserItem.css";

const UsersItem = (props) => {
  return (
    <li className="user-item">
      <div className="user-item__content">
        <div className="user-item__image">
          <Avatar image={props.image} alt={props.name} />
        </div>
        <div className="user-item__info">
          <h2>{props.name}</h2>
          <h3>
            {props.teamCount} {props.teamCount === 1 ? "Team" : "Teams"}
          </h3>
        </div>
      </div>
    </li>
  );//Checking if the team count of user is less than 1/Else changes text to plurals
};//Used Avatar in shared component as the avatar. Everything is divided and done on their own time

export default UsersItem;
