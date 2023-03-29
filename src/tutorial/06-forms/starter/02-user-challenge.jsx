import { useEffect, useState } from 'react';
import {data} from '../../../data'

const UserChallenge = () => {
  const [name, setName] = useState('')
  const [users, setUsers] = useState(data)

    const handleSubmit = (e)=>{
      e.preventDefault()
      const usersCount = users.length
      const newUser = {id: usersCount+1, name}
      const newUsers = [...users, newUser]
      setUsers(newUsers)
    };

    const removeUser = (id)=>{
      const updatedUsers = users.filter((user)=>user.id!==id)
      setUsers(updatedUsers)
    }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' value={name} onChange={(e)=>setName(e.target.value)} />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    <h1>Users </h1>
        {users.map((user)=>{
          const {id, name} = user
          return <div key={id}>
           <h4>{id} : {name}</h4>
           <button className='btn' onClick={()=>removeUser(id)}>Useri Sil</button>
           </div>
        })}
  
      {/* render users below */}
    </div>
  );
};
export default UserChallenge;
