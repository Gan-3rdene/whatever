import styles from "@/styles/nav.module.css"
import { useEffect, useState } from "react";

export default function Navigation() {
    const [username, setUsername] = useState("");
    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        if(storedUsername) {
            setUsername(storedUsername);
        }

        const hamMenu = document.querySelector(".ham-menu");
        const offScreenMenu = document.querySelector('.offscreen');
        hamMenu.addEventListener("click", () => {
            hamMenu.classList.toggle('active');
            offScreenMenu.classList.toggle('active');
        });

        return () => {
            hamMenu.removeEventListener("click", () => {
                hamMenu.classList.toggle('active');
                offScreenMenu.classList.toggle('active');
            });
        }
    }, []);

    const ChangeToLibrary = () => {
        window.location.replace("/whatever/sub_pages/library");
    };
    const ChangeToMain = () => {
        window.location.replace("/whatever");
    };
    const ChangeToSignUp = () => {
        window.location.replace("/whatever/sub_pages/login");
    };
    const ChangeToUpload = () => {
        window.location.replace("/whatever/sub_pages/uploadgame");
    };

    return (
        <>
        <div class = "offscreen">
            <ul>
                <li>Browse Games</li>
                <li onClick={ChangeToLibrary}>My Library</li>
                <li onClick={ChangeToUpload}>Upload Games</li>
                <li>Learn HTML/Java</li>
            </ul>
        </div>
        <nav>
            <div className="row">
                <div className = "ham-menu" >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="logo" onClick={ChangeToMain}>
                    <img className="webIcon" src="/whatever/resources/cartridge.jpg" alt="cartridge"/>
                    <p>Whatever Games</p>
                </div>
            </div>
            <div className="searchBar">
                <input type="text" placeholder="Search for games" class="navSearch"/>
                {/* <button> */}
                    <img class="searchIcon" src="/whatever/resources/search.png" alt="searchIcon"/>
                {/* </button> */}
            </div>
            <div className={styles.signup} onClick={ChangeToSignUp}>
                <img className="" src="/whatever/resources/circle-user-round.svg" alt="userIcon"/>
                {username ? <p>{username}</p> : <p>Sign up</p>}
            </div>
        </nav>
        </>
    );
}