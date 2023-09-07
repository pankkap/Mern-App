import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import { toast } from "react-toastify";
import Product from '../components/Product';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { config } from '../constant';
const url = config.url.BASE_URL;


export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [Products, setProducts] = useState([])
  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${url}/api/products`);
      console.log(response.data)
      setProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  useEffect(()=>{
    getProducts();
  },[])
  return (    
    <>
     
    
        <Link
          to="/create"
          className="btn btn-warning"
        >
          Create a Product
        </Link>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 ">
        {isLoading ? (
          "Loading"
        ) : (
          <>
            {Products.length > 0 ? (
              <Container>
                <Row>
                {Products.map((product, index) => {
                  return (
                    <Col className="d-flex" key={index}>
                    <Product
                      key={index}
                      product={product}
                      getProducts={getProducts}
                    />
                    </Col>
                  );
                })}
                </Row>
              </Container>
            ) : (
              <div className="mt-4 bg-gray-800 text-white font-serif p-4">
                There is no product
              </div>
            )}
          </>
        )}
      </div>
   
    </>
  )
}
