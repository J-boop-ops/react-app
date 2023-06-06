import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import axios from "axios";
import { Table } from "semantic-ui-react";
import Navbar from "../Navbar/Navbar";
import "./AddToCart.css";

export default function AddToCart() {
  const userid = localStorage.getItem("usernum");
  const [APIData, setAPIData] = useState([]);

  const getCartData = () => {
    axios
      .get(`https://localhost:7101/api/AddToCart`)
      .then((getData) => setAPIData(getData.data));
  };

  useEffect(() => {
    const results = APIData.filter((data) => data.userId == userid);
    setAPIData(results);
  });

  const getData = () => {
    axios.get(`https://localhost:7101/api/AddToCart`).then((getData) => {
      setAPIData(getData.data);
    });
  };

  const onDelete = (id) => {
    axios.delete(`https://localhost:7101/api/AddToCart/${id}`).then(() => {
      getData();
    });
  };

  const handleDelete = (data) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmed) {
      onDelete(data.cartId);
    }
  };

  return (
    <div className="searchpage">
      <Navbar />
      <Table celled inverted selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>ProductId</Table.HeaderCell>
            <Table.HeaderCell>UserId</Table.HeaderCell>
            <Table.HeaderCell>ProductName</Table.HeaderCell>
            <Table.HeaderCell>ProductDescription</Table.HeaderCell>
            <Table.HeaderCell>ProductCategory</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.cartId}</Table.Cell>
                <Table.Cell>{data.productId}</Table.Cell>
                <Table.Cell>{data.userId}</Table.Cell>
                <Table.Cell>{data.productName}</Table.Cell>
                <Table.Cell>{data.productDescription}</Table.Cell>
                <Table.Cell>{data.productCategory}</Table.Cell>
                <Table.Cell>
                  <Button color="red" onClick={() => handleDelete(data)}>
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
