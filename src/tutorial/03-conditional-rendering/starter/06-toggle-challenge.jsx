import { useState, useEffect } from "react";

const ToggleChallenge = () => {

  const [bool, setBool] = useState(true);

  return ( <>
  <button className="btn" onClick={() => setBool(!bool)}>Toggle Bakalım</button>
  {bool && <SomeComponent />}
  </>
  )
  
};


const SomeComponent = () => {
  return (
    <div>
      <h4>hello there</h4>
      <button className='btn'>log out</button>
    </div>
  );
};

export default ToggleChallenge;
