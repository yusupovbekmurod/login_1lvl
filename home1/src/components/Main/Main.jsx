import React from 'react'
import axios from "axios";
import { useRef, useState, useEffect } from "react";
export default function Main() {
    const [count, setCount] = useState([]);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
  
    useEffect(() => {
      (async function () {
        await axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((response) => {
            setCount(response.data);
          });
      })();
    }, []);
  
 
    function handleSubmit(e) {
      e.preventDefault();
  
      const newItem = count.filter(
        (item) => item.username === passwordRef.current.value 
      );
  
      if (newItem.length !== [].length) {

        
       
      } else {
        alert('Iltimos registratsiyadan o\'ting')
      }
    }
  
  return (
    <div>
       <div className="form_box login" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <form action="#">
          <div className="input_box">
            <span className="icon">🔒 </span>

            <input type="email" required ref={emailRef} />
            <label>Email</label>
          </div>
          <div className="input_box">
            <span className="icon"> 🔑</span>

            <input
              type="password"
              required
              ref={passwordRef}
              placeholder="username"
            />
            <label>Password</label>
          </div>
          <button>Submit</button>
        </form>
        
      </div>
      <div>faqat username ga tekshirish qoyilgan <br/></div>
      <div>API = "https://jsonplaceholder.typicode.com/users"</div>
        
    </div>
  )
}
