

const GameCard = ({image, title, tags, description}) => {
    return (
        <div className="gameCard" >
            <img className="gameimg" src={image} alt={title}/>
            <div className="pcollection">
                <p>{title}</p>
                <p className="tags">{tags}</p>
            </div>
        </div>
    );
}

export default GameCard;