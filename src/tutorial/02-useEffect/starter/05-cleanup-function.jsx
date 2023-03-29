import { useState, useEffect } from "react";

const CleanupFunction1 = () => {

  const [toggle, setToggle] = useState(false);

  console.log('render');

  return (
    <div>
      <button className='btn' onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent1 />}
    </div>
  );
};
const RandomComponent1 = () => {
  useEffect(() => {
    const someFunc = () => {
      //some logic
    };
    window.addEventListener('scroll', someFunc)
    return ()=> window.removeEventListener('scroll', someFunc)
  }, []);

  return <h1>hello there</h1>;
};

export default CleanupFunction1;
