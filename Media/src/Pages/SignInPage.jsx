import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import './SingInPage.css'
const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [btnText, setBtnText] = useState("Submit")
  const pswdRef = useRef();
  const navigate = useNavigate();
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    console.log(email);
    console.log(pswdRef.current.value);
    setBtnText("Loading...")
    setTimeout(() => {
      alert("Succefuly")
      setEmail("")
      pswdRef.current.value = "";
      setBtnText("Submit")
        setTimeout(() => {
          navigate("/home")
        }), 1000

    }), 3000
  };

  return (
    <>
    <div className="container">
    <div className="left">
      <h1>Instagram</h1>
      <form
        onSubmit={handleFormSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "#A9A9A9",
          padding: "1.5rem",
          borderRadius: "10px",
        }}
      >
        {/* Email */}
        <label htmlFor="email">Email: </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          id="email"
          name="email"
        />

        {/* Password */}
        <label htmlFor="password">Password: </label>
        <input ref={pswdRef} type="password" id="password" name="password" />
        <button type="submit">Submit</button>
      </form>
      </div>
      
      <div className="right">
        <div className="BackgroundImage"></div>
      </div>
    </div>
    </>
  );
};

export default SignInPage;