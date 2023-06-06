import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router";
import Navbar from "../Navbar/Navbar";

export default function SearchCart() {
  const userId = localStorage.getItem("usernum");
  let navigate = useNavigate();
  const [CartId, setCartId] = useState(Number);
  const [productId, setproductId] = useState(Number);
  const [productName, setproductName] = useState("");
  const [productDescription, setproductDescription] = useState("");
  const [productCategory, setproductCategory] = useState("");

  useEffect(() => {
    setproductId(localStorage.getItem("productId"));
    setproductName(localStorage.getItem("productName"));
    setproductDescription(localStorage.getItem("productDescription"));
    setproductCategory(localStorage.getItem("productCategory"));
  }, []);

  const cartAPIData = () => {
    axios
      .post(`https://localhost:7101/api/AddToCart`, {
        CartId,
        productId,
        userId,
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
            <label>CartId</label>
            <input
              placeholder="CartId"
              value={CartId}
              onChange={(e) => setCartId(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>productId</label>
            <input
              placeholder="productId"
              value={productId}
              onChange={(e) => setproductId(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>userId</label>
            <input placeholder="userId" value={userId} />
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
          <Button color="green" onClick={cartAPIData} type="submit">
            Update
          </Button>
        </Form>
      </div>
    </>
  );
}
