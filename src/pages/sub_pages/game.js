import { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import gamestyles from "@/styles/game.module.css";
import Navigation from "../reusable/nav2.js";
import Footer from "../reusable/footer.js";
import GameScreen from "../reusable/gamescreen.js";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });
  
  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });
  
// export default function Game({data}) { #add later
export default function Game() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [gameId, setGameId] = useState(null);
    const [selectedRating, setSelectedRating] = useState(null);
    const [averageRating, setAverageRating] = useState(0);

    const fetchRatings = useCallback(async () => {
        if (!gameId) return;
        try {
          const res = await fetch(`http://localhost:5009/rating/${gameId}`);
          if (!res.ok) throw new Error(`HTTP error ${res.status}`);
          const data = await res.json();
          setAverageRating(data.averageRating);
        } catch (error) {
          console.error("Error fetching ratings", error);
        }
      }, [gameId]);

      const fetchComments = useCallback(async () => {
        if (!gameId) return;
        try {
          const res = await fetch(`http://localhost:5008/comments/${gameId}`);
          if (!res.ok) throw new Error(`HTTP error ${res.status}`);
          const data = await res.json();
          const filtered = data.filter((c) => c.gameId === gameId);
          setComments(filtered);
        } catch (error) {
          console.error("Error fetching comments", error);
        }
      }, [gameId]);

      useEffect(() => {
        const stored = sessionStorage.getItem("selectedGameID");
        setGameId(stored);
      }, []);

      useEffect(() => {
        fetchRatings();
        fetchComments();
      }, [gameId, fetchRatings, fetchComments]);

      const handleRatingSubmit = async () => {
        const username = sessionStorage.getItem("username");
        if (!username) {
          alert("Login to rate the game");
          return;
        }
        if (!selectedRating) {
          alert("Select a rating");
          return;
        }

        try {
          const res = await fetch("http://localhost:5009/ratingpost", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, rating: selectedRating, gameId }),
        });
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
          await res.json();
          
          await fetchRatings();
          setSelectedRating(null);
        } catch (error) {
          console.error("Error submitting rating", error);
        }
      };

      const handleStarClick = (rating) => setSelectedRating(rating);

      const handleCommentSubmit = async () => {
        const username = sessionStorage.getItem("username");
        if (!username) {
          alert("Login to comment");
          return;
        }

        try {
          const res = await fetch("http://localhost:5008/commentpost", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, comment: newComment, gameId }),
          });
          if (!res.ok) throw new Error(`HTTP error ${res.status}`);
          const data = await res.json();
          setComments((prev) => [...prev, data.data]);
          setNewComment("");
        } catch (error) {
          console.error("Error submitting comment", error);
        }
      };

    return (
      <>
        <Head>
          <title>Whatever Games</title>
          <meta name="description" content="Video game website" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </Head>
        
        <Navigation/>
        
        <div
          classNameName={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
        >
            <main className="column">
                <div className="line">
                </div>
                <div class={gamestyles.column}>
                    {/* {data.map((game) => (
                      <img key={game.id} classname={gamestyles.gamePart} src={game.cover}></img>
                    ))} */}
                    {/* <img class={gamestyles.gamePart} src="/whatever/resources/screenshot/snake.png"/> */}
                    <GameScreen/>
                    <div class={gamestyles.endRow}>
                      {/* {data.map((game) => (
                        <p key={game.id} className={gamestyles.title}>
                          {game.title}
                        </p>
                      ))} */}
                      <div class={gamestyles.row}>

                        <div className="row">
                          {[1, 2, 3, 4, 5].map((num) => (
                            <span key={num} className={`fa fa-star ${num <= selectedRating ? "checked" : ""}`} onClick={() => handleStarClick(num)}></span>
                          ))}
                          <button className="button" onClick={() => handleRatingSubmit(selectedRating)}>Submit</button>
                        </div>
                        

                        <p>{averageRating}</p>
                        {/* <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span> */}
                      </div>
                    </div>
                    <div class={gamestyles.startColumn}>
                      {/* {data.map((game) => (
                        <p key={game.id} className={gamestyles.title}>
                          Description: {game.description}
                        </p>
                      ))}
                      {data.map((game) => (
                        <p key={game.id} className={gamestyles.title}>
                          How to play: {game.how_to_play}
                        </p>
                      ))} */}
                    </div>
                    <div className={gamestyles.smallLine}/>
                    <div class={gamestyles.endRow}>
                        <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="Leave a comment."/>
                        <button className="button" onClick={handleCommentSubmit}>Submit</button>
                    </div>
                    {comments.map((c) => (
                      <div class={gamestyles.row}>
                        <div class={gamestyles.column}>
                          <img src="/whatever/resources/circle-user-round.svg"/>
                          <p>{c.username}</p>
                        </div>
                          <p>{c.comment}</p>
                      </div>
                    ))}
                </div>
            </main>

            <Footer>
            </Footer>
        </div>
      </>
    );
  }