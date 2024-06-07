// src/components/Signup.tsx
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Form, Input, Button, } from 'antd';
import logo from "../img/company.png"
import { useNavigate } from 'react-router-dom';
import earth from "../img/earth.png"
import "../style/Signup.scss"
import { auth, db } from './firebase';
import { setDoc, doc } from 'firebase/firestore';




const Signup: React.FC = () => {
    // State variables
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    // Function to handle redirection
    const handleLoginRedirect = () => {
        navigate("/SignIn")
    }

    const handleRegister = async (values: any) =>{
        try {
            await createUserWithEmailAndPassword(auth, values.email, values.password);
            const user = auth.currentUser;
            console.log(user);
            if(user){
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    name: values.name
                });
            }
            console.log("User Registered Successfully!!");
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


    {/* logo image and sign-up form */}
    <div className="earth-login-container">
     <div className="earth-conatiner">
     <img src={earth} alt="earth" className="earth-img" />
     </div>
    <div className="login-body">
    <p className="signup-title">Sign Up</p> 

    {/* Register form */}
    <Form layout="vertical" onFinish={handleRegister}>
      <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
        <Input className="input-box" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Item>

      <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
        <Input className="input-box" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Item>

      <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter your password' }]}>
        <Input.Password className="input-box" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Item>

      <Form.Item label="Confirm Password" name="confirmPassword" rules={[
        { required: true, message: 'Please confirm your password' },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error('The two passwords that you entered do not match'));
          },
        }),
      ]}>
        <Input.Password className="input-box" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="signup-button">Continue</Button>
      </Form.Item>
    </Form>
    <div>
        {/* Redirect to Login page */}
        <p className="login-link">Already Have Account? <span className="Login-button" onClick={handleLoginRedirect}>SignIn here</span></p>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Signup;
