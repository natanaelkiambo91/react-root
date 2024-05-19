import React from "react";
import './Loginawal.css';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";


const Loginawal = () => {
    const navigate = useNavigate()
    return (
        
        <div className="wrapper" >
            <div className="form-box-login">
                <form action="">
                    <h3>Masuk Sebagai?</h3>
                    
                    <button type="submit" onClick={() => navigate ('/Mahasiswa')}>Mahasiswa</button>
                    <button type="submit" onClick={() => navigate ('/Pengelola')}>Pengelola</button>
                    <button type="submit" onClick={() => navigate ('/Akademitas')}>Akademitas</button>
                    <button type="submit" onClick={() => navigate ('/Umum')}>Umum</button>

                    <div className="register-link">
                        <p>Belum punya akun? <a href="#">Daftar</a></p>
                    </div>
                </form>
            </div>
        </div>
            
                    
                
            
        
    );
};

export default Loginawal;