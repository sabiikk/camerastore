

import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import Header from '../components/Header';
import '../pages/product.css';
import { FaHeart, FaHeartBroken, FaShoppingCart } from 'react-icons/fa';
import Footer from '../components/Footer';




const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the description for product 1.',
      price: 100,
      image: 'https://img.freepik.com/premium-photo/camera-sits-rock-field-grass_1303498-1789.jpg?w=900',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the description for product 2.',
      price: 150,
      image: 'https://img.freepik.com/free-photo/view-person-holding-professional-digital-camera_23-2150720448.jpg?t=st=1729246495~exp=1729250095~hmac=078cea7149ffa76d519a2f4dae93a4f9c26d47ea27764ee44b60db80fc7c5949&w=900',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is the description for product 3.',
      price: 200,
      image: 'https://img.freepik.com/free-photo/view-person-holding-professional-digital-camera_23-2150720390.jpg?t=st=1729247068~exp=1729250668~hmac=db778fce9a1703426bdbb798a0d057c26084e448fc655b3144280872d411f4fe&w=900',
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'This is the description for product 3.',
        price: 200,
        image: 'https://cdn.zyrosite.com/cdn-ecommerce/store_01H4RW6X8E2NX4FEY6VGT31PJG%2Fassets%2F1688760297670-gopro_hero_11_black_13_0.webp',
      },
      {
        id: 3,
        name: 'Product 3',
        description: 'This is the description for product 3.',
        price: 200,
        image: 'https://cdn.pickr.com.au/wp-content/uploads/2022/09/0C67B485-5452-4E9C-B690-9AEE49A8B59F.jpeg',
      },
         {
      id: 3,
      name: 'Product 3',
      description: 'This is the description for product 3.',
      price: 200,
      image: 'https://cdn11.bigcommerce.com/s-2d7c9/images/stencil/1280x1280/products/14575/74754/09-pdp-h12b-gallery-1920__93163.1703162865.jpg?c=2',
    },
  ];
  const Nikonproducts = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the description for product 1.',
      price: 100,
      image: 'https://img.freepik.com/free-photo/front-view-camera-device-work_23-2148300495.jpg?t=st=1729248056~exp=1729251656~hmac=6ab319f63e82f4a1a74925c078950f9736bebe5271c32b724cce44f9c05357fc&w=900',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the description for product 2.',
      price: 150,
      image: 'https://img.freepik.com/free-photo/woman-with-camera-world-photographer-day_1150-23267.jpg?t=st=1729248699~exp=1729252299~hmac=86d3bb60c0d960841e4afd7250fb6d3deffbde73ceae10245e7f0f46cbfa5af2&w=900',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is the description for product 3.',
      price: 200,
      image: 'https://img.freepik.com/free-photo/close-up-photographer-holding-camera_23-2148503535.jpg?t=st=1729248652~exp=1729252252~hmac=2bfb57e3039a1c82f18dc76f5e21022d66b81bb85289ba35ee2ebd1aca051981&w=900',
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'This is the description for product 3.',
        price: 200,
        image: 'https://img.freepik.com/free-photo/young-female-product-photographer-studio_23-2148970228.jpg?t=st=1729248578~exp=1729252178~hmac=1d188052ce4d97969c8a2d31793fa57f1ef91be13c07f946f403b61aa46adcd6&w=900',
      },
      {
        id: 3,
        name: 'Product 3',
        description: 'This is the description for product 3.',
        price: 200,
        image: 'https://img.freepik.com/free-photo/product-photographer-with-camera-studio_23-2148970262.jpg?t=st=1729248868~exp=1729252468~hmac=a60a671003659b6543c8c1ebf511b256e81d0a7ad7095f228a8017178b786b24&w=900',
      },
         {
      id: 3,
      name: 'Product 3',
      description: 'This is the description for product 3.',
      price: 200,
      image: 'https://img.freepik.com/free-photo/top-view-camera-concept-with-black-background_23-2148363425.jpg?t=st=1729248909~exp=1729252509~hmac=3cd55ae1742cbdf59667936ee8b76453ca961ff78bef12868423e4fec452ea06&w=900',
    },
  ];  
  const instaproducts = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the description for product 1.',
      price: 100,
      image: 'https://i.ytimg.com/vi/46DUFJagpf4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB1dOwfj4ps6hAiEtKZA0r6t1YiUg',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the description for product 2.',
      price: 150,
      image: 'https://i.ytimg.com/vi/H8PLt4lG-tY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBmnV8HSuxBYaPIwRoaBCKaPHp7nQ',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is the description for product 3.',
      price: 200,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9pWFzoQBhZMkjf4NJ8S6xHaoxlIL8oke4y6r9Ep_s7zW-z3f8awnfxuZZJ2ZqUUQN0PU&usqp=CAU',
    },
    // {
    //     id: 3,
    //     name: 'Product 3',
    //     description: 'This is the description for product 3.',
    //     price: 200,
    //     image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/e7b2e158-f2cb-4792-a822-a2de1cf983a6.__CR0,1,970,600_PT0_SX970_V1___.png',
    //   },
    //   {
    //     id: 3,
    //     name: 'Product 3',
    //     description: 'This is the description for product 3.',
    //     price: 200,
    //     image: 'https://img.freepik.com/free-photo/product-photographer-with-camera-studio_23-2148970262.jpg?t=st=1729248868~exp=1729252468~hmac=a60a671003659b6543c8c1ebf511b256e81d0a7ad7095f228a8017178b786b24&w=900',
    //   },
    //      {
    //   id: 3,
    //   name: 'Product 3',
    //   description: 'This is the description for product 3.',
    //   price: 200,
    //   image: 'https://img.freepik.com/free-photo/top-view-camera-concept-with-black-background_23-2148363425.jpg?t=st=1729248909~exp=1729252509~hmac=3cd55ae1742cbdf59667936ee8b76453ca961ff78bef12868423e4fec452ea06&w=900',
    // },
  ];  









function Allproduct() {
    const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setSelectedProduct(product);
    setShow(true);
  }
  return (
    <>
    <Header/>
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <input
        type="text"
        placeholder="Search..."
        // value={query}
        // onChange={handleInputChange}
        style={{
          padding: '8px',
          width: '400px',
          borderRadius: '4px',
          border: '1px solid #ddd',
        }}
      />
      <button
        // onClick={handleSearch}
        style={{
          padding: '8px 12px',
          marginLeft: '5px',
          borderRadius: '4px',
          border: 'none',
          backgroundColor: '#007bff',
          color: '#fff',
          cursor: 'pointer',
        }}
      >
        Search
      </button>
    </div>



    <div className="container mt-5">
      <h3 className="text-center mb-4"> <span style={{color:'red'}}>GoPro</span> ACTION CAMERA</h3>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <Card>
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                onClick={() => handleShow(product)}
                className="product-image"
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: ${product.price}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <Button
                    variant={product.favorite ? 'danger' : 'outline-danger'}
                    onClick={() => handleFavoriteToggle(product.id)}
                  >
                    {product.favorite ? <FaHeartBroken /> : <FaHeart />} Favorite
                  </Button>
                  <Button
                    variant="outline-primary"
                    onClick={() => handleAddToCart(product)}
                  >
                    <FaShoppingCart /> Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* Modal for displaying product details */}
      {selectedProduct && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="img-fluid mb-3"
            />
            <p>{selectedProduct.description}</p>
            <h5>Price: ${selectedProduct.price}</h5>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>

    {/* newsection */}
    <div className="container mt-5">
      <h3 className="text-center mb-4"> <span style={{color:'red'}}>NIKON</span> MIRRORLESS CAMERAS
</h3>
      <div className="row">
        {Nikonproducts.map((Nikonproducts) => (
          <div className="col-md-4 mb-4" key={Nikonproducts.id}>
            <Card>
              <Card.Img
                variant="top"
                src={Nikonproducts.image}
                alt={Nikonproducts.name}
                onClick={() => handleShow(Nikonproducts)}
                className="product-image"
              />
              <Card.Body>
                <Card.Title>{Nikonproducts.name}</Card.Title>
                <Card.Text>{Nikonproducts.description}</Card.Text>
                <Card.Text>Price: ${Nikonproducts.price}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <Button
                    variant={Nikonproducts.favorite ? 'danger' : 'outline-danger'}
                    onClick={() => handleFavoriteToggle(Nikonproducts.id)}
                  >
                    {Nikonproducts.favorite ? <FaHeartBroken /> : <FaHeart />} Favorite
                  </Button>
                  <Button
                    variant="outline-primary"
                    onClick={() => handleAddToCart(Nikonproducts)}
                  >
                    <FaShoppingCart /> Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* Modal for displaying product details */}
      {selectedProduct && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="img-fluid mb-3"
            />
            <p>{selectedProduct.description}</p>
            <h5>Price: ${selectedProduct.price}</h5>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>

    {/* therd section */}
    <div className="container mt-5">
      <h3 className="text-center mb-4"> <span style={{color:'red'}}>INSTA360</span> ACTION CAMERAS

</h3>
      <div className="row">
        {instaproducts.map((instaproducts) => (
          <div className="col-md-4 mb-4" key={instaproducts.id}>
            <Card>
              <Card.Img
                variant="top"
                src={instaproducts.image}
                alt={instaproducts.name}
                onClick={() => handleShow(instaproducts)}
                className="product-image"
              />
              <Card.Body>
                <Card.Title>{instaproducts.name}</Card.Title>
                <Card.Text>{instaproducts.description}</Card.Text>
                <Card.Text>Price: ${instaproducts.price}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <Button
                    variant={instaproducts.favorite ? 'danger' : 'outline-danger'}
                    onClick={() => handleFavoriteToggle(instaproducts.id)}
                  >
                    {instaproducts.favorite ? <FaHeartBroken /> : <FaHeart />} Favorite
                  </Button>
                  <Button
                    variant="outline-primary"
                    onClick={() => handleAddToCart(instaproducts)}
                  >
                    <FaShoppingCart /> Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* Modal for displaying product details */}
      {selectedProduct && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="img-fluid mb-3"
            />
            <p>{selectedProduct.description}</p>
            <h5>Price: ${selectedProduct.price}</h5>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
    
    
    <Footer/>
    
    </>
    
  )
}

export default Allproduct