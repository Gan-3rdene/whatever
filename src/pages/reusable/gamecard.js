import styles from "@/styles/gamecard.module.css"

const GameCard = ({image, title, tags, description, game_id}) => {

    const ChangeToGame = () => {
        sessionStorage.setItem("selectedGameID", game_id);
        window.location.replace("/whatever/sub_pages/game");
    };
    return (
        <div className={styles.gameCard} onClick={ChangeToGame} >
            <img className="gameImage" src={image} alt={title}/>
            <div className="pcollection">
                <p>{title}</p>
                <p className="tags">{tags}</p>
            </div>
        </div>
    );
}

export default GameCard;