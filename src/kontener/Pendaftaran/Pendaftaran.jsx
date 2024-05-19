import React, { useState } from 'react'
import './Pendaftaran.css';
import { FaUser, FaLock } from "react-icons/fa";
import axios from 'axios';

const Pendaftaran = () => {
    const [values, setValues] = useState({
        Nama: '',
        TempatLahir:'',
        WaktuLahir: '',
        Nim: '',
        Password:''
    })
    const handleChange = (event) => {
        setValues({...values, [event.target.name]:[event.target.value]})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/perpustakaandb', {values})
        .then(res => console.log("Pendaftaran Sukses"))
        .catch(err => console.log(err));
    }
  return (
    <div className="wrapper" >
            <div className="form-box-login">
                <form onSubmit={handleSubmit}>
                    <h3>Pendaftaran</h3>
                    <div className="input-box">
                        <input type="text" placeholder="Masukan Nama Lengkap Anda"  name="Nama" onChange={handleChange} />
                        
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Tempat Lahir" name="TempatLahir" onChange={handleChange} />
                        
                    </div>
                    <div className="input-box">
                        <input type="date"  placeholder="Masukan Tanggal lahir anda" name="WaktuLahir" onChange={handleChange}/>
                        
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="NIM/NIK/NIP" name="Nim" onChange={handleChange} />
                        
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Buat Password" name="Password" onChange={handleChange} />
                        <FaLock className="icon"/>
                    </div>
                    
                    
                    <button type="submit">Daftar</button>

                    <div className="register-link">
                        <p>Sudah punya akun? <a href="#">Masuk</a></p>
                    </div>
                </form>
            </div>
        </div>
            
  )
}

export default Pendaftaran
