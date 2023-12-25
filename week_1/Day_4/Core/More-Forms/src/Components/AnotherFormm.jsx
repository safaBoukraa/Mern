import { useState } from "react";

const AnotherFormm = (props) => {
    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cmpassword, setCmpassword] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { Firstname,Lastname, email, password ,cmpassword};
    console.log("Welcome", newUser);
    setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setCmpassword("");}

       

    const validateFirstName = (firstName) => {
            const regName = /^[a-zA-Z]+$/;
            return regName.test(firstName);
          };

     const validateLastName = (lastName) => {
            const regName = /^[a-zA-Z' ]*$/;
            return regName.test(lastName);
          };
    const validateEmail = (email) => {
            const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            return regEmail.test(email);
        };        
     
    const PasswordForm = () => {
            const [formData, setFormData] = useState({
              password: '',
              confirmPassword: ''
            });
            const [formErrors, setFormErrors] = useState({
              password: '',
              confirmPassword: ''
            });
            const [formValid, setFormValid] = useState(false); }  
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
     

    </div>
  );
};
export default AnotherFormm;