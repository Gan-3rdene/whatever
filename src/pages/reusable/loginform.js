import styles from '@/styles/LoginForm.module.css';
import { useState } from 'react';
// import Navigation from "./nav.js";
// import Footer from "./footer.js";

export default function LoginForm() {
  const ChangeToMain = () => {
    window.location.replace("/whatever");
  };
  const handleLogin = async () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    try {
      const response = await fetch("http://localhost:5003/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if(response.ok) {
        // setUsername(username);
        localStorage.setItem("username", username);
        ChangeToMain();
      }
      else {
        console.error(data.message);
        alert(data.message);
      }
    }
    catch(error) {
      console.error("Error, ", error);
    }
  };

  return (
    <>
      {/* <Navigation>
      </Navigation> */}
      <main className="center">
        <div className={styles.loginContainer}>
          <h1>Login</h1>

          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>

          <div className={styles.buttonGroup}>
            <button className={styles.button}>Sign up</button>
            <button className={styles.button} onClick={handleLogin}>Log in</button>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.businessLogin}>
            <button className={styles.button} onClick={() => console.log("Business Login")}>
              Business
            </button>
          </div>
        </div>
      </main>
      
      {/* <Footer>

      </Footer> */}

    </>
    
  );
}