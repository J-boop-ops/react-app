import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router";
import Navbar from "../Navbar/Navbar";

export default function Update() {
  let navigate = useNavigate();
  const [productId, setproductId] = useState(null);
  const [productName, setproductName] = useState("");
  const [productDescription, setproductDescription] = useState("");
  const [productCategory, setproductCategory] = useState("");

  useEffect(() => {
    setproductId(localStorage.getItem("productId"));
    setproductName(localStorage.getItem("productName"));
    setproductDescription(localStorage.getItem("productDescription"));
    setproductCategory(localStorage.getItem("productCategory"));
  }, []);

  const updateAPIData = () => {
    axios
      .put(`https://localhost:7101/api/ProductCatalog/${productId}`, {
        productId,
        productName,
        productDescription,
        productCategory,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <>
      <Navbar />
      <div className="main">
        <Form size="large">
          <Form.Field>
            <label>productId</label>
            <input
              placeholder="productId"
              value={productId}
              onChange={(e) => setproductId(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>productName</label>
            <input
              placeholder="productName"
              value={productName}
              onChange={(e) => setproductName(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>productDescription</label>
            <input
              placeholder="productDescription"
              value={productDescription}
              onChange={(e) => setproductDescription(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>productCategory</label>
            <input
              placeholder="productCategory"
              value={productCategory}
              onChange={(e) => setproductCategory(e.target.value)}
            />
          </Form.Field>
          <Button color="green" onClick={updateAPIData} type="submit">
            Update
          </Button>
        </Form>
      </div>
    </>
  );
}
