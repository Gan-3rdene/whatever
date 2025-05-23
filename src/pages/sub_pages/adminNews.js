import Navigation from "../reusable/nav2.js";
import Footer from "../reusable/footer.js";
import AdminNewsCard from "../reusable/adminNewsCards.js";
import { useEffect, useState } from "react";

export default function AdminNews() {
    
    const [news, setNews] = useState([]);
    const [showForm, setShowForm] = useState(false);
    
    useEffect(() => {
        const Getnews = async () => {
            try {
                const response = await fetch("http://localhost:5006/news");
                if(!response.ok) {
                throw new Error(`http error ${response.status}`);
                }
                const data = await response.json();
                console.log("News", data);
                setNews(data);
            }
            catch (error) {
                console.log("Error catching news", error);
            }
        };
        Getnews();
    }, []);

    const [newArticle, setNewArticle] = useState({
        news_id: Date.now(),
        title: "",
        description: "",
        url: "",
        urlToImage: "",
        author: "",
    });
    const handleInput = (e) => {
        setNewArticle({ ...newArticle, [e.target.name]: e.target.value});
    }
    const handleSubmit = async () => {
        try {
            const response = await fetch("http://localhost:5006/newspost", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newArticle),
            });
            if(!response.ok) throw new Error("Failed to add news");
            const data = await response.json();
            alert("Added news");
            setShowForm(false);
            setNewArticle({title:"", description:"", url:"", urlToImage:"", author:""});
        }
        catch (error) {
            console.error("error adding news:", error);
        }
    };

    return (
        <>
            <Navigation/>
            <div className="column">
                <button onClick={() => setShowForm(!showForm)} className="green">Add News</button>
                {showForm && (
                    <div className="row">
                        <input type="text" name="title" placeholder="Title" onChange={handleInput} />
                        <input type="text" name="description" placeholder="Description" onChange={handleInput} />
                        <input type="text" name="url" placeholder="URL" onChange={handleInput} />
                        <input type="text" name="urlToImage" placeholder="Image URL" onChange={handleInput} />
                        <input type="text" name="author" placeholder="Author" onChange={handleInput} />
                        <button onClick={handleSubmit} className="blue">Submit</button>
                    </div>
                )}
                {news.length > 0 ? (
                    news.map((article) => (
                      <AdminNewsCard key={article.author} news_id={article.news_id} image={article.urlToImage || "./resources/angrybird.jpg"} title={article.title} description={article.description} url={article.url} setNews={setNews}/>
                    ))
                  ) : (
                    <p>No news</p>
                )}
                {/* <AdminNewsCard></AdminNewsCard> */}
            </div>
            <Footer/>
        </>
    )
}