import { useState } from "react";

const InputForm = () => {
  const [input, setValue] = useState("");
  const [myFullName, setMyFullName] = useState("Rodgers Nyangweso");
  return (
    <>
      <div className="container border border-primary">
        <div className="row">
          <h1>{myFullName}</h1>
          <div>
            <input className="form-control" type="text"></input>
            <button className="btn btn-lg btn-success">Save</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputForm;
