import { useState } from "react";

function Form(){
    let [formData,setFormData]=useState({fullName:"",username:"",password:""});
    
  
    // let handleNameChange=(event)=>{
    //     setFullName(event.target.value)

    // }

    // let handleUsername=(event)=>{
    //     setUsername(event.target.value)

    // }

    let handleInputChange=(event)=>{
        let fieldName=event.target.name;
        let newValue=event.target.value;

        setFormData((currData)=>{
            return{...currData,
                [fieldName]:newValue
            };
        })

    }

    let handleSubmit=(event)=>{
        event.preventDefault();
        setFormData({
            fullName:"",
            username:"",
            password:"",
        });

    }

   

    return(
      
        
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full name</label>
            <input placeholder="enter your name" type="text" value={formData.fullName} id="fullName" name="fullName" onChange={handleInputChange}></input>
            <br></br>
            <br></br>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="enter username" value={formData.username}  id="username" name="username" onChange={handleInputChange}></input>
            <br></br>
            <label htmlFor="password">Password</label>
            
            <input type="password" placeholder="enter password" value={formData.password}  id="password" name="password" onChange={handleInputChange}></input>
            <button>submit</button>
        </form>
        
    )
}
export default Form;