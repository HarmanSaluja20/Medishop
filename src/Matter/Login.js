import React, {useState} from 'react'
import { Link } from 'react-router-dom'
export default function Login() {

    const[credentials,setcredentials]= useState ({email:"",password:""})

    const Submitted = async(nos)=>{
        nos.preventDefault();
        const reponse = await fetch("http.//localhost:5000/api/createuser",{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({email:credentials.email, password:credentials.password})
        });
        const json = await Response.json()
        console.log(json);
        if(!json.success)
        alert("Enter valid Credentials")
    } 
    const onChange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }


  return (
    <>
        <div className='container'>
    <form onSubmit={Submitted}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
    <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to='/createuser' className='m-3 btn btn-primary'>Don't have account ?</Link>
</form>
</div>
    </>
  )
}
