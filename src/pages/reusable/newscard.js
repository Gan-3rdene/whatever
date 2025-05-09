import styles from "@/styles/gamecard.module.css"

const NewsCard = ({image, title, tags, description, onClick}) => {

    return (
        <div className={styles.gameCard} onClick={onClick}>
            <img className="gameImage" src={image} alt={title}/>
            <div className="pcollection">
                <p>{title}</p>
                <p className="tags">{tags}</p>
            </div>
        </div>
    );
}

export default NewsCard;