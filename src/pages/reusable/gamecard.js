

const GameCard = ({image, title, tags, description}) => {
    const ChangeToGame = () => {
        window.location.replace("/game");
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