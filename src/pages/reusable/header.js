export default function Header() {
    return (
      <header>
        <nav>
          <div className="row">
            <img onClick={() => console.log("Go to main")} className="webIcon" src="/resources/cartridge.jpg" alt="cartridge" />
            <p onClick={() => console.log("Go to main")}>Whatever Games</p>
          </div>
          <div className="searchBar">
            <input type="text" placeholder="Search for games" />
            <button>
              <img className="searchIcon" src="/resources/search.png" alt="searchIcon" />
            </button>
          </div>
          <div className="row">
            <img src="/resources/circle-user-round.svg" alt="userIcon" />
            <p>Login</p>
          </div>
        </nav>
      </header>
    );
  }
  