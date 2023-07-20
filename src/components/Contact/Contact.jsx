import React, { useEffect, useState } from 'react'
import './Contact.css'
import { useNavigate } from 'react-router';
import { Form } from 'react-router-dom';
import { FormGroup } from 'react-bootstrap';

function getData(){

    const data = localStorage.getItem("empData");
  
    if(data != null){
  
        return JSON.parse(data);
  
    }else{
  
        return [];
    }
  
  }

function Contact() {

    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({

        name:'',
        email:'',
        contact:'',
        std : '',
        course : '',
        password:'',
    

    })



    const handleSubmit =(e) =>{
        
        e.preventDefault();

        const gData = getData();
        console.log(gData);

        const uid = Math.floor(Math.random() * 100);

        const newInput = {...inputValue, id:uid }
        
        const nData = [...gData, newInput];
        localStorage.setItem("empData", JSON.stringify(nData));
        
        setInputValue({

          name:'',
          email:'',
          contact:'',
          std: '',
          course : '',
          password:'',
      
  
      })
        navigate('/view');
        
    }

    const handleChange = (e) =>{

        const name  = e.target.name;
        const value = e.target.value;
        
        setInputValue({...inputValue, [name]: value});

    }


    return (

        <div>
            <div className="contact-container">
                <div className="left-col">
                    <img className="logo" src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/logo.png" />
                </div>
                <div className="right-col">
                {/* <Form/> */}
                    <h1>Contact us</h1>
                    <p>Planning to visit Indonesia soon? Get insider tips on where to go, things to do and find best deals for your next adventure.</p>

                    <form onSubmit={handleSubmit}>
                        <label >Full Name</label>
                        <input type="text" name="name"  onChange={handleChange} value={inputValue.name}/>

                        <label >Email Address</label>
                        <input type="email" name="email"  onChange={handleChange} value={inputValue.email}/>

                        <label >Contact</label>
                        <input type="text" name="contact"  onChange={handleChange} value={inputValue.contact}/>

                        <label >Std</label>
                        <input type="number" name="std"  onChange={handleChange} value={inputValue.std}/>
                        
                        <label >Course</label>
                        <input type="text" name="course" onChange={handleChange} value={inputValue.course}/>

                        <label >Login Password</label>
                        <input type="password" name="password"  onChange={handleChange} value={inputValue.password}/>

            
                        <button type="submit"  className='btn btn-primary'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact