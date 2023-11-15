import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
  //use state
  const [form, setForm] = useState({});

  //onchange handler
  const handlForm = (e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value,
    });
  };

  //post user
  const handleSubmit = async(e)=>{
    e.preventDefault();

    const response = await fetch("http://localhost:4000/demo", {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();
    console.log(data)
  };

  return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
          <span>username</span>
          <input type='text' onChange={(handlForm)} name='username'></input>
          </div>
          <div>
          <span>password</span>
          <input type='password' onChange={(handlForm)} name='password'></input>
          </div>
          <button type='submit'>Submit</button>
          <button onClick={()=>navigate("/user")} >See Info</button>
        </form>
      </div>
  )
};

export default Home;