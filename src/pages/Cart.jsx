import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { FaTrash, FaHeart, FaHeartBroken } from 'react-icons/fa';
import Header from '../components/Header';

const backgroundStyle = {
    backgroundImage: 'url("https://img.freepik.com/free-photo/photo-camera-cactus-white-background_23-2148210386.jpg?t=st=1729243953~exp=1729247553~hmac=2740d39b7063a0cb7a85be9227157908c113434aa68ddda139de0e0b5a1dc6fa&w=740")', // Replace with your background image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh'
  }
  

function Cart() {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', price: 100, favorite: false },
        { id: 2, name: 'Product 2', price: 150, favorite: false },
        { id: 3, name: 'Product 3', price: 200, favorite: false },
        { id: 4, name: 'Product 3', price: 200, favorite: false },
      ]);
       
  return (
    <>
    <Header/>
    <div  style={backgroundStyle}>
    <div className="container mt-4">
      <h3 className="mt-2 text-center mb-4 display-6">Cart</h3>
      <Table striped bordered hover responsive className="table-sm table-modern">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price ($)</th>
            <th>Favorite</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td className="text-center">{index + 1}</td>
              <td>{product.name}</td>
              <td className="text-center">{product.price}</td>
              <td className="text-center">
                <Button
                  variant={product.favorite ? 'danger' : 'outline-danger'}
                  size="sm"
                  onClick={() => handleFavorite(product.id)}
                  className="favorite-btn"
                >
                  {product.favorite ? <FaHeartBroken /> : <FaHeart />}
                </Button>
              </td>
              <td className="text-center">
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => handleDelete(product.id)}
                  className="delete-btn"
                >
                  <FaTrash /> Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </div>
    </>
  )
}

export default Cart