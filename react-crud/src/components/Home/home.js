/*create a home page component and add some text to it*/
import React from "react";
import "./home.css";
import { Card, Image, Icon } from "semantic-ui-react";
import Navbar from "../Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <Card>
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Jaswanth</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2023</span>
            </Card.Meta>
            <Card.Description>
              Jaswanth is a Retailer in Bangalore.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href="/read">
              <Icon name="add to cart" />
              View Products
            </a>
          </Card.Content>
        </Card>
      </div>
    </>
  );
}
