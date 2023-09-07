import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditPage = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [product, setProduct] = useState({
    name: "",
    quantity: "",
    price: "",
    image: "",
  });

  const getProduct = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:3004/api/products/${id}`);
      setProduct({
        name: response.data.name,
        quantity: response.data.quantity,
        price: response.data.price,
        image: response.data.image,
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3004/api/products/${id}`, product);
      toast.success("Updated a product successfully");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="container p-3 col-md-6 border">
      <h2 className="font-semibold text-2xl mb-4 block text-center">
        Edit a Product
      </h2>
      {isLoading ? (
        "Loading"
      ) : (
        <>
         <Form onSubmit={updateProduct}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value={product.name}
                  onChange={(e) =>
                    setProduct({ ...product, name: e.target.value })
                  } />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="text" placeholder="Enter Quantity" value={product.quantity} onChange={(e) =>
                    setProduct({ ...product, quantity: e.target.value })
                  }  />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Enter Price" value={product.price}
                  onChange={(e) =>
                    setProduct({ ...product, price: e.target.value })
                  } />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Enter Image Address" value={product.image}
                  onChange={(e) =>
                    setProduct({ ...product, image: e.target.value })
                  } />
      </Form.Group>
      {/* {product.image && (
                  <div className="border rounded p-2 mt-4 ">
                    <img className="w-full" src={product.image} />
                  </div>
                )} */}

      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
         </>
      )}
    </div>
  );
};

export default EditPage;
