import { useState, useReducer } from 'react';
import { data } from '../../../data';

const defaultState = {
  people:data,
  isLoading:false
}

const reducer = (state,action) =>{
  if (action.type==='CLEAR_LIST') {
    return {...state, people:[]}
  } else if (action.type ==='REMOVE_ITEM') {
    let newPeople = state.people.filter((person) => person.id !== action.id);
    console.log(action);
    return {...state, people:newPeople}
  } else if (action.type === 'RESET_ITEMS') {
    return {...state, people:data}
  }
}

const ReducerBasics = () => {

  // a default state and we need provide a reducer
  // reducer : a function that is going to manipulate the state

  const [state,dispatch] = useReducer(reducer, defaultState)

  const removeItem = (id) => {
    dispatch({type:'REMOVE_ITEM', id:id})
    
  };

  const clearItems = ()=>{
    dispatch({type:'CLEAR_LIST'})
  }
  const resetItems = () =>{
    dispatch({type:'RESET_ITEMS'})
  }

  console.log(state);
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length<1?('No item'):(
              <button
              className='btn'
              style={{ marginTop: '2rem' }}
              onClick={clearItems}>
              clear items
            </button>
      )}

      {state.people.length==4? (
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
