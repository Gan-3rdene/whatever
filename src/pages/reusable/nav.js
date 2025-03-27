

export default function Navigation() {
    return (
        <>
        <div class = "offscreen">
            <ul>
                <li>Browse Games</li>
                <li onclick="changeToLibrary()">My Library</li>
                <li>Upload Games</li>
                <li>Learn HTML/Java</li>
            </ul>
        </div>
        <nav>
            <div className="row">
                <div className = "ham-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="row">
                    <img className="webIcon" src="../resources/cartridge.jpg" alt="cartridge"/>
                    <p>Whatever Games</p>
                </div>
            </div>
            <div className="searchBar">
                {/* <input type="text" placeholder="Search for games" class="navSearch"/> */}
                <button>
                {/* <image class="searchIcon" src="./resources/search.png" alt="searchIcon"/> */}
                </button>
            </div>
            <div className="row" onclick="signup()">
                {/* <image className="" src="resources/circle-user-round.svg" alt="userIcon"/> */}
                <p>Sign up</p>
            </div>
        </nav>
        </>
    );
}