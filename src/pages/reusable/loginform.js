import styles from 'import styles from './UploadGameForm.module.css';

export default function UploadGameForm() {
  return (
    <div className={styles.uploadContainer}>
      <div className={styles.uploadForm}>
        <div className={styles.uploadImageContainer}>
          <div className={styles.uploadImageArea}>
            <p>Upload image</p>
            <div className={styles.fileInputContainer}>
              <input type="file" id="fileInput" className={styles.fileInput} />
              <label htmlFor="fileInput" className={styles.fileInputLabel}>Choose file</label>
              <span className={styles.fileStatus}>No file chosen</span>
              <button className={styles.uploadButton}>Upload</button>
            </div>
          </div>
          <input type="text" className={styles.gameNameInput} placeholder="Name" />
          <textarea className={styles.gameDescriptionInput} placeholder="Description"></textarea>
        </div>

        <div className={styles.gameDetails}>
          <div className={styles.tagsInputContainer}>
            <input type="text" className={styles.tagsInput} placeholder="+Tags" />
          </div>
          <div className={styles.howToPlayContainer}>
            <textarea className={styles.howToPlayInput} placeholder="How to play"></textarea>
          </div>
          <div className={styles.submitContainer}>
            <button className={styles.uploadGameButton}>Upload game</button>
          </div>
        </div>
      </div>
    </div>
  );
}
/LoginForm.module.css';

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