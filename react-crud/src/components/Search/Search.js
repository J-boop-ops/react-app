import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table } from "semantic-ui-react";
import Navbar from "../Navbar/Navbar";
import "./Search.css";

export default function Search() {
  const [APIData, setAPIData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    axios.get(`https://localhost:7101/api/ProductCatalog`).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  useEffect(() => {
    const results = APIData.filter((data) =>
      data.productName.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm, APIData]);

  const setData = (data) => {
    let { productId, productName, productDescription, productCategory } = data;
    localStorage.setItem("productId", productId);
    localStorage.setItem("productName", productName);
    localStorage.setItem("productDescription", productDescription);
    localStorage.setItem("productCategory", productCategory);
  };

  const getData = () => {
    axios.get(`https://localhost:7101/api/ProductCatalog`).then((getData) => {
      setAPIData(getData.data);
    });
  };

  const onDelete = (id) => {
    axios.delete(`https://localhost:7101/api/ProductCatalog/${id}`).then(() => {
      getData();
    });
  };

  return (
    <>
      <Navbar />
      <div className="searchpage">
        <div className="ui search">
          <div className="ui icon input">
            <input
              className="prompt"
              type="text"
              placeholder="Search Product Name"
              value={searchTerm}
              onChange={handleChange}
            />
            <i className="search icon"></i>
          </div>
        </div>
        <Table celled inverted selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ProductId</Table.HeaderCell>
              <Table.HeaderCell>ProductName</Table.HeaderCell>
              <Table.HeaderCell>ProductDescription</Table.HeaderCell>
              <Table.HeaderCell>ProductCategory</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {searchResults.map((data) => {
              return (
                <Table.Row>
                  <Table.Cell>{data.productId}</Table.Cell>
                  <Table.Cell>{data.productName}</Table.Cell>
                  <Table.Cell>{data.productDescription}</Table.Cell>
                  <Table.Cell>{data.productCategory}</Table.Cell>
                  <Table.Cell>
                    <Link to="/update">
                      <Button color="violet" onClick={() => setData(data)}>
                        Update
                      </Button>
                    </Link>
                    <Button
                      color="green"
                      onClick={() => onDelete(data.productId)}
                    >
                      Delete
                    </Button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}
