import React from 'react';
import { data } from '../../../data';
const ReducerBasics = () => {
  const [people, setPeople] = React.useState(data);
  const [isEqualData, setIsEqualData] = React.useState(true)
  const [isClear, setIsClear] = React.useState(false)
  //usestate kullanarak yaptık toggle işlemi


  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
    setIsEqualData(false)
    if (newPeople.length==0) {
      setIsClear(true)
    }
  };

  const clearItems = ()=>{
    setPeople([])
    setIsEqualData(false)
    setIsClear(true)
  }
  const resetItems = () =>{
    setPeople(data)
    setIsEqualData(true)
    setIsClear(false)
  }

  const isPeopleNull = () =>{
    if (people.length==0) {
      return true
    } else {
      return false
    }
  }
  const isPeopleEqualData = () =>{
    if (people.length!==data.length) {
      return false
    }else {
      return true
    };
  }
  isPeopleEqualData()
  isPeopleNull()
  //bir de bu iki fonku kullanarak yaptık toggle button işlemi
  console.log(isPeopleNull());
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {isPeopleNull()?('No item'):(
              <button
              className='btn'
              style={{ marginTop: '2rem' }}
              onClick={clearItems}
            >
              clear items
            </button>
      )}

      {isPeopleEqualData()? (
          <p>Kullanıcılar Yüklü</p>
      ) :(
        <>
        <p></p>
        <button className='btn' style={{marginTop:'2rem'}} onClick={resetItems}>
          Load Users
        </button>
      </>
      )}

    </div>
  );
};

export default ReducerBasics;
