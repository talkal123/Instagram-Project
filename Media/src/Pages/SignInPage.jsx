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
          <div className="BackgroundImage"></div>
        </div>
      <div className="right">
        <div className="top-right">
        <h1>Instagram</h1>
          <form onSubmit={handleFormSubmit}>
              {/* Email */}
              <label htmlFor="email"></label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email} type="text" id="email" name="email" placeholder="Email or Phone Number"
              />
              {/* Password */}
              <label htmlFor="password"> </label>
              <input ref={pswdRef} type="password" id="password" name="password" placeholder="Password" />
              <button type="submit">Log In</button>
          </form>
          </div>
          <div className="bottom-right-container">
            <div className="bottom-right-1">
              <p>התחבר/י באמצעות פייסבוק</p>  
              <p>שכחת את הסיסמא?</p>
            </div>
            <div className="bottom-right-2">  
              <p>אין לך חשבון ? הרשמה</p>
            </div>
            
          </div>
        </div>
      
    </div>
    </>
  );
};

export default SignInPage;