import styles from '@/styles/UploadGameForm.module.css';
import { useEffect, useState } from "react";

export default function UploadGameForm() {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if(storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleUpload = async () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const tags = document.getElementById("tags").value;
    const how_to_play = document.getElementById("how_to_play").value;
    const cover = document.getElementById("fileInput").value;
    
    try {
      const response = await fetch("http://localhost:5004/games", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, tags, how_to_play, cover}),
      });
      const data = await response.json();
      if(response.ok) {
        alert("Game sent to admins for approval");
      }
      else {
        console.error(data.message);
        alert(data.message);
      }
    }
    catch(error) {
      console.error("Game upload error, ", error);
    }
  }

  return (
    <div className={styles.uploadContainer}>
      <div className={styles.uploadForm}>
        <div className={styles.uploadImageContainer}>
          <div className={styles.uploadImageArea}>
            <p>Upload image</p>
            <div className={styles.fileInputContainer}>
              <input type="file" id="fileInput" className={styles.fileInput} accept="image/*" />
              <label htmlFor="fileInput" className={styles.fileInputLabel} >Choose file</label>
              <span className={styles.fileStatus}>No file chosen</span>
              <button className={styles.uploadButton}>Upload</button>
            </div>
          </div>
          <input type="text" className={styles.gameNameInput} placeholder="Name" id="title"/>
          <textarea className={styles.gameDescriptionInput} placeholder="Description" id="description"></textarea>
        </div>

        <div className={styles.gameDetails}>
          <div className={styles.tagsInputContainer}>
            <input type="text" className={styles.tagsInput} placeholder="+Tags" id="tags"/>
          </div>
          <div className={styles.howToPlayContainer}>
            <textarea className={styles.howToPlayInput} placeholder="How to play" id="how_to_play"></textarea>
          </div>
          <div className={styles.submitContainer}>
            <button className={styles.uploadGameButton} onClick={handleUpload}>Upload game</button>
          </div>
        </div>
      </div>
    </div>
  );
}
