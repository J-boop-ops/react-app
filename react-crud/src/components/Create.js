import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Create() {
  let navigate = useNavigate();
  const [productId, setproductId] = useState(Number);
  const [productName, setproductName] = useState("");
  const [productDescription, setproductDescription] = useState("");
  const [productCategory, setproductCategory] = useState("");

  const postData = () => {
    axios
      .post(`https://localhost:7101/api/ProductCatalog`, {
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
    <div>
      <Form size="large">
        <Form.Field>
          <label>ProductId</label>
          <input
            placeholder="ProductId"
            value={productId}
            onChange={(e) => setproductId(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>productName</label>
          <input
            placeholder="productName"
            onChange={(e) => setproductName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>productDescription</label>
          <input
            placeholder="productDescription"
            onChange={(e) => setproductDescription(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>productCategory</label>
          <input
            placeholder="productCategory"
            onChange={(e) => setproductCategory(e.target.value)}
          />
        </Form.Field>
        <Button color="orange" onClick={postData} type="submit">
          Submit
        </Button>
        <Button>ji</Button>
      </Form>
    </div>
  );
}
