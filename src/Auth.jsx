import React from "react";
import { Col,Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";




function Auth({register}) {
  const registerForm=register ? true:false;
  return (
    <>
     <div style={{width:'100%',height:'80vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div className="container w-75">
        <h3>
        <Link style={{textDecoration:'none', marginTop:'20px'}} to={'/'}>BACK TO HOME </Link> 
       </h3>
       <div>
        <Row>
          <Col md={6} className="p-4 d-flex justify-content-center align-items-center" >
          <img style={{width:'350px',marginTop:'10px'}} src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?t=st=1729854598~exp=1729858198~hmac=627e72684a726c9cdd64dbf30987f907d0857166ed9620f961a5ad4326998271&w=740" alt="" />
          </Col>
          
          <Col md={6} className='p-5 d-flex justify-content-center' >
          <form className="w-100">
            <h5 className='text-center'><i class="fa-solid fa-camera-retro me-2"></i>CAMERA STORE</h5>
            {registerForm?
            <>
               <h6 className='text-center mb-3 mt-3'>Sign Up To Your Account</h6>
                <input type="text" name="" id="" placeholder="Name" className="form-control rounded" />
            </>
            :
            <h6  className='text-center mb-3 mt-3'>Sing In To Your Account</h6>
            
          }
          <div  className='mb-3 mt-3'>
            <input type="text" placeholder="Email Id" className="form-control rounded" />
          </div>
          <div  className='mb-3 mt-3'>
            <input type="password" placeholder="password" className="form-control rounded" />
          </div>
          {registerForm?

          <div>
            <button className="btn btn-warning w-100">REGISTER</button>
            <p className='mt-3'style={{color:'black'}}>Already A User? Click Here To
                   <Link className='ms-2' style={{textDecoration:'none',color:'blue'}} to={'/login'} >LOGIN</Link></p>
          </div> :

          <div>
            <button className="btn btn-warning w-100">LOGIN</button>
            <p className='mt-3'style={{color:'black'}}>Not Registerd yet? Click Here To
                   <Link className='ms-2' style={{textDecoration:'none',color:'blue'}} to={'/register'} >REGISTER</Link></p>
          </div>  
        }
      

          </form>

          </Col>
        </Row>
       </div>
      </div>
     </div>
    </>
  );
}

export default Auth;
