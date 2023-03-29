import { useState } from "react"
const UserContainer = () => {

    const [user, setUser] = useState({name : 'Bob'})

    const handleClick = () =>{
        setUser(null)
    }
  return (
    <div>
        {user ? (
        <div>
            Hello There, {user.name}
            <button className="btn" onClick={handleClick}>
            Logout
            </button>
        </div>
        ) : (
        <div>
        <h4>Please Login</h4>
        </div>
         
        )}
    </div>
  );
};
export default UserContainer