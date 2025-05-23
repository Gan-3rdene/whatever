import { useEffect, useState } from "react";

export default function AdminNewsCard({news_id, image, title, description, url, setNews}) {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTitle, setUpdateTitle] = useState(title);
    const [updatedDescription, setUpdatedDescription] = useState(description);
    const [updatedImage, setUpdateImage] = useState(image);

    function handleUpdate() {
        fetch(`http://localhost:5007/newsupdate/${news_id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({title: updatedTitle, description: updatedDescription, urlToImage: updatedImage}),
        })
        .then((response) => response.json())
        .then((data) => {
            if(data.success) {
                alert("News updated");
                setIsEditing(false);
                setNews(prevNews=>prevNews.map(article => article.news_id === news_id ? { ...article, title: updatedTitle, description: updatedDescription, urlToImage: updatedImage } : article));
            }
            else {
                alert("Failed to update news");
            }
        })
        .catch((error) => {
            console.error("Error updating news", error);
            alert("an error occured");
        })
    }

    function handleDelete() {
        fetch(`http://localhost:5007/newsdelete/${news_id}`, {
            method: "DELETE",
        })
        .then((response) => response.json())
        .then((data) => {
            if(data.success) {
                alert("News deleted");
                setNews(prevNews=>prevNews.filter(article => article.news_id !== news_id));
            }
            else {
                alert("Failed to delete");
            }
        })
        .catch((error) => {
            console.error("Error at deleting news item", error);
            alert("an error occured");
        });
    } 
    return (
        <>
            <div className="row">
                <div>
                    <img src={image} className="smallImage" onClick={() => window.open(url, "_blank")}/>
                    {/* onClick={window.open(url, "_blank")} */}
                </div>
                <div className="column">
                    {isEditing ? (
                        <>
                            <input type="text" value={updatedTitle} onChange={(e) => setUpdateTitle(e.target.value)}/>
                            <textarea value={updatedDescription} onChange={(e) => setUpdatedDescription(e.target.value)}/>
                            <input type="text" value={updatedImage} onChange={(e) => setUpdateImage(e.target.value)}/>
                        </>
                    ) : (
                        <>
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </>
                    )}
                </div>
                <div className="row">
                    {isEditing ? (
                        <button className="button" onClick={handleUpdate}>Save</button>
                    ) : (
                        <button className="button" onClick={() => setIsEditing(true)}>Edit</button>
                    )}
                    <button className="red" onClick={() => handleDelete()}>Delete</button>
                </div>
            </div>
        </>
    )
}