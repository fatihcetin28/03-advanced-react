import { data } from '../../../data';
import { useState } from 'react';

//const [veri, setVeri] = useState([]);

//console.log(veri)

const UseStateArray = () => {
  const [veri, setVeri] = useState(data)

  const kisiSil = (id) =>{
      console.log(id)
      const newVeri = veri.filter((person)=>person.id !== id)
      setVeri(newVeri)
      console.log(veri)
  }
  const herkesiSil = () =>{
    setVeri([])
  }
  
  return <div>{veri.map((person)=>{
    const {id, name} = person
    //console.log(person)
    return(
      <div key={id}>
        <h4>{name}</h4>
        <button type='button' className='btn' onClick={()=>kisiSil(id)}>Kişiyi Sil</button>
      </div>
    ) 
  }
    )}
    <button type='button' className='btn' style={{marginTop:'2rem'}} onClick={herkesiSil}>Herkesi Sil</button>
    </div>;
};

export default UseStateArray;
