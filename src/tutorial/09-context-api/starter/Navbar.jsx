import { useState } from "react"
import NavLinks from "./NavLinks"

const Navbar = () => {

  const [user, setUser] = useState({name : 'Bob'})

  const logout = () =>{
      setUser(null)
  }

  return (
    <nav className="navbar">
        <h3>Context API</h3>
        <NavLinks user={user} logout={logout} />
    </nav>
  )
}
export default Navbar