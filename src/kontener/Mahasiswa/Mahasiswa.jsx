import React from "react";
import './Mahasiswa.css';
import { FaUser, FaLock } from "react-icons/fa";


const Mahasiswa = () => {
    return (
        
        <div className="wrapper" >
            <div className="form-box-login">
                <form action="">
                    <h3>Login sebagai Mahasiswa</h3>
                    <div className="input-box">
                        <input type="text" placeholder="Masukan NIM anda" required />
                        <FaUser className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="passwors" placeholder="Password" required />
                        <FaLock className="icon"/>
                    </div>
                    
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit">Login</button>

                    <div className="register-link">
                        <p>Don't have an account? <a href="#">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
            
                    
                
            
        
    );
};

export default Mahasiswa;