import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const CreatePage = () => {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const saveProduct = async(e) => {
        e.preventDefault();
        if(name === "" || quantity === "" || price === "" || image == ""){
            toast.error('Please fill out all input completely');
            return;
        }
        try {
            setIsLoading(true);
            const response = await axios.post("http://localhost:3004/api/products", {name: name, quantity: quantity, price: price, image: image});
            toast.success(`Save ${response.data.name} Successfully`);
            setIsLoading(false);
            navigate("/");
        } catch (error) {
            toast.error(error.message);
            setIsLoading(false);
        }
    }


    return (
        <div className="container p-3 col-md-6 border">
            <h2 className="font-semibold text-2xl mb-4 block text-center">
                Create a Product
            </h2>

            <Form onSubmit={saveProduct}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="text" placeholder="Enter Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </Form.Group>
      
      
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Enter Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Enter Image Address" value={image} onChange={(e) => setImage(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

           
        </div>
    );
}

export default CreatePage;
