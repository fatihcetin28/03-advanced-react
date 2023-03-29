import { useState } from "react";
const frameworks = ["react", "angular", "vue", "svelte"];
const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState('');

  const handleShipping = (e) =>{
    e.preventDefault()
    setShipping(e.target.checked)
  }

  const handleSelected = (e) =>{
    e.preventDefault()
    setFramework(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(shipping, framework);
  }

  return (
    <div>
      <form className="form" id="otherInputs" onSubmit={handleSubmit}>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="shipping"> Free Shipping </label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={shipping}
            onChange={handleShipping}
          ></input>
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select name='framework' id="framework" form="otherInputs" value={framework} onChange={handleSelected}>
            {frameworks.map((fw)=>{
              return (
                <option value={fw} key={fw}>{fw}</option>
              )
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
