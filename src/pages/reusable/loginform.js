// import styles from '@/styles/LoginForm.module.css';

// import Navigation from "./nav.js";
// import Footer from "./footer.js";

export default function LoginForm() {
  return (
    <>
      {/* <Navigation>
      </Navigation> */}
      <main>
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
            <button className={styles.button}>Log in</button>
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