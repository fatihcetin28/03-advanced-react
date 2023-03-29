import { useState, useEffect } from "react";
const url = 'https://api.github.com/users';

const FetchData = () => {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const getUsers = async () =>{
      try {
        const resp = await fetch(url)
        const fetchUsers = await resp.json()
        setUsers(fetchUsers)
      } catch(error) {
        console.log(error);
      }
    }
    getUsers();
  }, [])

  return (
  <div>
    <h3>Github Users</h3>
    <ul className="users">
    {users.map((user)=>{
      const {login, id, avatar_url, html_url} = user;
      return (
        <li key={id}>
          <img src={avatar_url} alt={login}></img>
          <div>
          <h5>{login}</h5>
          <a href={html_url}>profile</a>
          </div>
        </li>
      )
    })
    }
    </ul>
  </div>
  )
};
export default FetchData;
