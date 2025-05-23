import { useEffect, useState } from "react";
import { searchGames } from "../../utils/searchservice";
import SearchResults from "./searchresult";

export default function Navigation() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [username, setUsername] = useState("");
    
    useEffect(() => {
        const hamMenu = document.querySelector(".ham-menu");
        const offScreenMenu = document.querySelector('.offscreen');
        const storedUsername = sessionStorage.getItem("username");
        if(storedUsername) {
            setUsername(storedUsername);
        }
        
        if (hamMenu && offScreenMenu) {
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
        }
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            const results = searchGames(searchQuery);
            setSearchResults(results);
            setShowResults(true);
        }
    };

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
        if (e.target.value.trim() === "") {
            setShowResults(false);
        }
    };

    const closeSearchResults = () => {
        setShowResults(false);
    };

    const ChangeToLibrary = () => {
        window.location.replace("/whatever/sub_pages/library");
    };
    
    const ChangeToMain = () => {
        window.location.replace("/whatever");
    };
    
    const ChangeToSignUp = () => {
        const username = sessionStorage.getItem("username");
        if(!username) {
            window.location.replace("/whatever/sub_pages/login");
        }
    };
    
    const ChangeToUpload = () => {
        const username = sessionStorage.getItem("username");
        if(username) {
            window.location.replace("/whatever/sub_pages/uploadgame");
        }
        else {
            ChangeToSignUp();
        }
    };

    return (
        <>
        <div className="offscreen">
            <ul className="list">
                <li className="hover" onClick={ChangeToMain}>Browse Games</li>
                <li className="hover" onClick={ChangeToLibrary}>My Library</li>
                <li className="hover" onClick={ChangeToUpload}>Upload Games</li>
                <li className="hover" >Learn HTML/Java</li>
            </ul>
        </div>
        <nav>
            <div className="hoverable">
                <div className="ham-menu">
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
                <form onSubmit={handleSearch}>
                    <input 
                        type="text" 
                        placeholder="Search for games" 
                        className="navSearch" 
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                    />
                    <button type="submit">
                        <img className="searchIcon" src="/whatever/resources/search.png" alt="searchIcon"/>
                    </button>
                </form>
                {showResults && (
                    <SearchResults 
                        results={searchResults} 
                        onClose={closeSearchResults}
                    />
                )}
            </div>
            <div className="hoverable" onClick={ChangeToSignUp}>
                <img className="" src="/whatever/resources/circle-user-round.svg" alt="userIcon"/>
                {username ? <p>{username}</p> : <p>Sign up</p>}
            </div>
        </nav>
        </>
    );
}