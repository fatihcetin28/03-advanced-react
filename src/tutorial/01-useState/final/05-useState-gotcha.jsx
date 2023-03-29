import { useState } from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    // setTimeout(() => {
    // console.log('clicked the button');
    //   setValue(value + 1);
    // }, 3000);
    setTimeout(() => {
      console.log('clicked the button');
      setValue((currentState) => { //setValue nun içine koyduğumuz parametre adı ne olursa olsun, son state i ifade ediyor
        return currentState + 1;  //reacttan geliyor bu, dolayısıyla her fonk çağırdığımızda son state i 1 artırıyor
      });                         //
    }, 3000);
  };
  return (
    <div>
      <h1>{value}</h1>
      <button className='btn' onClick={handleClick}>
        increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
