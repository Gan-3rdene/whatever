export default function UploadGameForm() {
    return (
      <div className="upload-container">
        <div className="upload-form">
          <div className="upload-image-container">
            <div className="upload-image-area">
              <p>Upload image</p>
              <div className="file-input-container">
                <input type="file" id="fileInput" className="file-input" />
                <label htmlFor="fileInput" className="file-input-label">Choose file</label>
                <span className="file-status">No file chosen</span>
                <button className="upload-button">Upload</button>
              </div>
            </div>
            <input type="text" className="game-name-input" placeholder="Name" />
            <textarea className="game-description-input" placeholder="Description"></textarea>
          </div>
  
          <div className="game-details">
            <div className="tags-input-container">
              <input type="text" className="tags-input" placeholder="+Tags" />
            </div>
            <div className="how-to-play-container">
              <textarea className="how-to-play-input" placeholder="How to play"></textarea>
            </div>
            <div className="submit-container">
              <button className="upload-game-button">Upload game</button>
            </div>
          </div>
        </div>
      </div>
    );
  }