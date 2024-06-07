// src/components/Signup.tsx
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import logo from "../img/company.png"
import { useNavigate } from 'react-router-dom';
import earth from "../img/earth.png"
import "../style/Signup.scss"
import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { auth } from './firebase';



const SignIn: React.FC = () => {
    // State variables
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const navigate = useNavigate();

    // Function to handle redirection
    const handleLoginRedirect = () => {
        navigate("/")
    }

    const handleSubmit = async(values: any) => {
        try {
            const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
            //token based authentication
            const user = userCredential.user;
            const idToken = await user.getIdToken();
            localStorage.setItem('token', idToken);
            console.log("User logged in Successfully");
            navigate("/dashboard")
        } catch (error: any) {
            console.log(error.message);
        }
    }

  

  return (
    <div className="signup-container">
        {/* Welcome message and company logo */}
    <div className="welcome-container">
        <p className="Welcome-text">Welcome To</p>
        <div className="logo-container">
          <img src={logo} alt="Company logo" className="logo-img" />
        </div>
        <div >
            <p className='content-text'>We help you track your organisations metrics as per the ESG Guidelines</p>
        </div>
        <div>
            <p className="last-text">Sounds Interesting?<span className='lastt-text'> Get in touch!</span> </p>
        </div>
    </div>

    {/* logo image and form */}
    <div className="earth-login-container">
     <div className="earth-conatiner">
     <img src={earth} alt="earth" className="earth-img" />
     </div>
    <div className="login-body">
    <p className="signup-title">Sign In</p>
    <p className="instruction-text">Enter your registered Email ID to continue</p>

    {/* Login form */}
    <Form layout="vertical" onFinish={handleSubmit}>

      <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
        <Input className="input-box" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Item>

      <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter your password' }]}>
        <Input.Password className="input-box" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="signup-button">Continue</Button>
      </Form.Item>
    </Form>
    <div>
        {/* Redirect to Login page */}
    <p className="login-link">Dont Have an Account? <span className="Login-button" onClick={handleLoginRedirect}>Signup here</span></p>
    </div>
    </div>
    </div>
    </div>
  );
};

export default SignIn;
