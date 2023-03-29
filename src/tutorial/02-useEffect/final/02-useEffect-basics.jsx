import { useState, useEffect } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log('hello there');
  };

  sayHello();
  

  // useEffect(() => {
  //   console.log('hello from useEffect');
  // });
//return return ediyor ama returne kadar koyduğumuz işlevler component in side effect i 
//state i manipüle ettiğimiz fonk çağıramıyoruz çünkü her seferinde re-render oluyor infinite loop a giriyoruz
//onun yerine side effect olarak useEffect kullanacağız
  useEffect(() => {
    console.log('hello from useEffect');
  }, []); // [] >>>> dependency array as second arg. boş bırakırsak sadece mount edildiğinde/initial renderda çalışır
  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default UseEffectBasics;
