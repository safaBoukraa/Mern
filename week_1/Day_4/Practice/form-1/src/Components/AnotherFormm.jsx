import { useState } from "react";

const AnotherFormm = (props) => {
    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cmpassword, setCmpassword] = useState("");

  const createUser = (e) => {
    // we must prevent the default refresh of the browser to keep our state from being reset
    e.preventDefault();

    // shorthand ES6 syntax for building an object
    const newUser = { Firstname,Lastname, email, password ,cmpassword};
    console.log("Welcome", newUser);
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setCmpassword("");

    
    }
  return (
    <div>
       
      <div>
        <label>Firstname: </label>
        <input
          type="text"
          value={Firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </div>
      <div>
        <label>Lastname: </label>
        <input
          type="text"
          value={Lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
      <div>
        <label>Email Address: </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Comfirm password: </label>
        <input
          type="text"
          value={cmpassword}
          onChange={(e) => setCmpassword(e.target.value)}
        />
      </div>
      <div>
        <div>{JSON.stringify(Firstname)}</div>
        <div>{JSON.stringify(Lastname)}</div>
        <div>{JSON.stringify(email)}</div>
        <div>{JSON.stringify(password)}</div>
        <div>{JSON.stringify(cmpassword)}</div>
      </div>
      

    </div>
  )
}

export default AnotherFormm;