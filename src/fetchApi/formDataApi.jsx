
const formDataApi = () => {



  return (
    <div>
        <h1>FormData API</h1>
        <form name="formApi" className="form">

        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="name"> Name </label>
          <input
            type="text"
            name="name"
            id="name"
          ></input>
        </div>

        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="email"> Email </label>
          <input
            type="email"
            name="email"
            id="email"
          ></input>
        </div>

        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="pass"> Password </label>
          <input
            type="pass"
            name="pass"
            id="pass"
          ></input>
        </div>

        <input type="submit" className="btn btn-block" />

        </form>
        
    </div>
  )
}
export default formDataApi