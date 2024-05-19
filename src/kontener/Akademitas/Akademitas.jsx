import React from "react";
import './Akademitas.css';
import { FaUser, FaLock } from "react-icons/fa";


const Akademitas = () => {
    return (
        
        <div className="wrapper" >
            <div className="form-box-login">
                <form action="">
                    <h3>Login sebagai Akademitas <br/> (Dosen, WD, Prodi, Dekan, Rektor)</h3>
                    <div className="input-box">
                        <input type="text" placeholder="Masukan NIP anda" required />
                        <FaUser className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="passwors" placeholder="Masukan Password Anda" required />
                        <FaLock className="icon"/>
                    </div>
                    
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Ingat Saya</label>
                        <a href="#">Lupa Password?</a>
                    </div>
                    <button type="submit">Masuk</button>

                    <div className="register-link">
                        <p>Lupa Akun Anda? <a href="#">Daftar</a></p>
                    </div>
                </form>
            </div>
        </div>
            
                    
                
            
        
    );
};

export default Akademitas;