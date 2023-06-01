//create a navbar component and add read, update, create links to it

import React from "react";
import { Link } from "react-router-dom";
import { Menu, Segment, Label } from "semantic-ui-react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <Segment inverted>
        <Menu inverted secondary>
          <div className="ui inverted menu">
            <Link to="/create">
              <Menu.Item name="create" className="red active item" />
            </Link>
            <Link to="/read">
              <Menu.Item name="read" className="orange active item" />
            </Link>
            <Link to="/home">
              <Menu.Item name="Home" className="green active item" />
            </Link>
          </div>
          <div className="user">
            <Label as="a">
              <img
                src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                alt="User:"
              />
              Jaswanth B S
            </Label>
            <Link to="/">
              <button className="ui inverted red button">Logout</button>
            </Link>
          </div>
        </Menu>
      </Segment>
    </div>
  );
}
