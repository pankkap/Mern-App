import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Product = ({ product, getProducts }) => {
  const deleteProduct = async (id) => {
    const result = await Swal.fire({
      title: "Do you want to delete the product?",
      showCancelButton: true,
      confirmButtonText: "Delete",
    });

    if (result.isConfirmed) {
      console.log("Yes Confirmed");
      try {
        await axios.delete(`http://localhost:3004/api/products/${id}`);
        toast.success("Delete a Product Successfully");
        getProducts();
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  return (
    
      <Card style={{ width: '15rem' }} className='my-3'>
      <Card.Img variant="top" src={product.image} style={{ height: '8rem' }}/>
      <Card.Body >
        <Card.Title className="text-center text-sm">{product.name}</Card.Title>
        <ListGroup variant="flush" className="text-center  text-sm">
        <ListGroup.Item>Quantiy: {product.quantity}</ListGroup.Item>
        <ListGroup.Item>Price: {product.price}</ListGroup.Item>
      </ListGroup>
      <div className="text-center">
        <Link
            to={`/edit/${product._id}`} variant="primary" className="mx-2 btn btn-primary">Edit</Link>
        <Button variant="danger" onClick={() => deleteProduct(product._id)} >Delete</Button>
        </div>
      </Card.Body>
    </Card>
    
  );
};

export default Product;
