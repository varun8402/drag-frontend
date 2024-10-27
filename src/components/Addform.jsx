import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AddUserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    if(image)
    formData.append('image', image);
    else{
         formData.append('image',"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
    }
    

    try {
      await axios.post('https://dragbackend-2gug.onrender.com/api/users', formData);
      
      setName('');
      setEmail('');
      setPhone('');
      setImage(null);
      navigate("/");
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h2>Add User</h2>
      <div className="form-input">
        <label>User Image:</label>
        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
      </div>
      <div className="form-input">
        <label>User Name <span style={{ color: 'red' }}> *</span>:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="form-input">
        <label>Email<span style={{ color: 'red' }}> *</span>:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="form-input">
        <label>Phone Number<span style={{ color: 'red' }}> *</span>:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>
      <button type="submit" className="submit-button">Add User</button>
      
    </form>
    <button onClick={() => navigate("/")} className="back-button">Back</button>
   </>
  );
};

export default AddUserForm;