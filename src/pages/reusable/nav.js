// import "../../javascript/gamepage.js"
import { useEffect } from "react";

export default function Navigation() {
    useEffect(() => {
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
        window.location.replace("/sub_pages/library");
    };
    const ChangeToMain = () => {
        window.location.replace("/whatever");
    };
    const ChangeToSignUp = () => {
        window.location.replace("/sub_pages/login");
    };

    return (
        <>
        <div class = "offscreen">
            <ul>
                <li>Browse Games</li>
                <li onClick={ChangeToLibrary}>My Library</li>
                <li>Upload Games</li>
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
                <div className="row" onClick={ChangeToMain}>
                    <img className="webIcon" src="../resources/cartridge.jpg" alt="cartridge"/>
                    <p>Whatever Games</p>
                </div>
            </div>
            <div className="searchBar">
                <input type="text" placeholder="Search for games" class="navSearch"/>
                <button>
                <img class="searchIcon" src="../resources/search.png" alt="searchIcon"/>
                </button>
            </div>
            <div className="row" onclick={ChangeToSignUp}>
                <img className="" src="../resources/circle-user-round.svg" alt="userIcon"/>
                <p>Sign up</p>
            </div>
        </nav>
        </>
    );
}