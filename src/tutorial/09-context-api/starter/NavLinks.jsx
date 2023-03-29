import UserContainer from "./UserContainer"
const NavLinks = () => {
  return (
    <div className="nav-container">
        <ul className="nav-links">
            <li><a href="http://www.google.com" target="_blank" rel="noopener noreferrer">Google</a></li>
            <li><a href="http://www.bing.com" target="_blank" rel="noopener noreferrer">Bing</a></li>
        </ul>
        <div>
            <UserContainer />
        </div>
    </div>

  )
}
export default NavLinks