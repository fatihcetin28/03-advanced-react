import { useAppContext } from "./Navbar";

const UserContainer = () => {

  const {user, logout} = useAppContext()
  // console.log(value);
  
  //custom hook
  

  return (
    <div className="user-container">
        {user ? (
        <>
            <p>Hello There, {user?.name}</p> 
            <button className="btn" onClick={logout}>
            Logout
            </button>
        </>
        ) : (
        <p>Please Login</p>
        )}
    </div>
  );
};
export default UserContainer