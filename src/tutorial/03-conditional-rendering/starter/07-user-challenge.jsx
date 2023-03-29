import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState({name:'hasan'})

  const flogin = ()=> {
    setUser({name:'Kamil'})
  }
  const flogout = () => {
    setUser(null)
  }

  return (
    <div>
    {user ? (
      <>
        <h4>hello there, {user.name}</h4>
        <button className="btn" onClick={flogout}>logout</button>
      </>
    ):(
      <>
        <h4>please login</h4>
        <button className="btn" onClick={flogin}>login</button>
      </>
    )}
    </div>
  ) 
};

export default UserChallenge;
