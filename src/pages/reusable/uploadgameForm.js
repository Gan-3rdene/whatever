import styles from './UploadGameForm.module.css';

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
