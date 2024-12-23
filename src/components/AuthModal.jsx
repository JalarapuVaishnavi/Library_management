// src/components/AuthModal.jsx
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Login from './Login';
import Register from './Register';

const AuthModal = ({ open, onClose }) => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <Popup open={open} onClose={onClose} modal>
            <div className="modal">
                {isLogin ? <Login /> : <Register />}
                <button onClick={toggleForm}>
                    {isLogin ? "Switch to Register" : "Switch to Login"}
                </button>
                <button onClick={onClose}>Close</button>
            </div>
        </Popup>
    );
};

export default AuthModal;