import { useState } from 'react';


const UseStateObject = () => {

  const [person, setPerson] = useState({
    name:'Kamil',
    age:32,
    hobi:'Cay icmek'
  });

  const faik = {name:'Faik',age:31,hobi:'Kahve icmek'}
  const showFaik = () =>{
    setPerson(faik)
    // setPerson({name:'Fatih'}) //Sadece isim kalır o da Fatih olur
    //setPerson({...person, name:'Hasan'}) //Her şey aynı tek isim farklı
  }

  return(
    <div>
    <h2>{person.name}</h2>
    <h2>{person.age}</h2>
    <h2>Hobi: {person.hobi}</h2>
    <button type='button' className='btn' 
    style={{marginTop:'2rem', fontSize:'3rem'}} 
    onClick={showFaik} >Faiki Göster</button>
    </div>
  );
};

export default UseStateObject;
