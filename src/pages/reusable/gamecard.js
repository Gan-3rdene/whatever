

const GameCard = ({image, title, tags, description}) => {
    const ChangeToGame = () => {
        const currentPath = window.location.pathname;
        const basePath = currentPath.startsWith("/sub_pages") ?  "./game" : "/sub_pages/game";
        window.location.replace(basePath);
    };
    return (
        <div className="gameCard" onClick={ChangeToGame}>
            <img className="gameImage" src={image} alt={title}/>
            <div className="pcollection">
                <p>{title}</p>
                <p className="tags">{tags}</p>
            </div>
        </div>
    );
}

export default GameCard;