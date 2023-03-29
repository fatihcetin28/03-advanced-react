import { useState } from "react";

const ControlledInputs = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (e) =>{
    // if (e.target.value=='a') {
    //   console.log('a yazdınız');
    // }
    // console.log(e.target.name);
    // console.log(e.target.value);

    setName(e.target.value);
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(name, email);
  }

  return (
      <form className="form" onSubmit={handleSubmit}>
        <h4>Controlled Forms</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label" >name</label>
          <input type="text" id="name" className="form-input" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">email</label>
          <input type="text" id="email" className="form-input" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-block">Submit</button>
      </form>
    )
};
export default ControlledInputs;