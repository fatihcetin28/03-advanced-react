import { useState } from "react";


const UseStateBasics = () => {

  //console.log(useState(1));
  // const value = useState('anesan')[0];
  // const func = useState('hello')[1];
  // console.log(value);
  // console.log(func);

  const [count, setCount] = useState('kamil');//0 > count 'un başlangıç değeri
  console.log(count)

  const handleClick = () =>{
    setCount('bob'); //count u bob yapar
    //setCount(count+1); //count u count+1 yapar, çünkü 12. satırda count ile setCount u birbirine bağladık
                      //setCount() a parantez içerisinde ne verirsek count u ona eşitler ve re-render eder
  }

  return (
    <div>
      {/* <h1>{value}</h1> */}
      <h2>useState basics</h2>
      <h3>{count}. kez tıkladınız</h3>
      <button type="button" className="btn" onClick={handleClick}>Artırmak için tıkla</button>
    </div>
    
    )

};

export default UseStateBasics;
