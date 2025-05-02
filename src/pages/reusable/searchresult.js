import { useRouter } from 'next/router';

export default function SearchResults({ results = [], onClose }) {
    const router = useRouter();
    
    const handleGameClick = (gameId) => {
        router.push(`/whatever/src/pages/sub_pages/game?id=${gameId}`);
        onClose();
    };
    
    return (
        <div className="search-results-container">
            {results.length > 0 ? (
                <div className="search-results">
                    <div className="search-results-header">
                        <h3>Search Results</h3>
                        <button className="close-btn" onClick={onClose}>×</button>
                    </div>
                    <ul>
                        {results.map(game => (
                            <li 
                                key={game.id} 
                                className="search-result-item"
                                onClick={() => handleGameClick(game.id)}
                            >
                                <img src={game.image} alt={game.title} className="search-result-img" />
                                <div className="search-result-info">
                                    <h4>{game.title}</h4>
                                    <p>{game.tags}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="search-results no-results">
                    <div className="search-results-header">
                        <h3>No Results Found</h3>
                        <button className="close-btn" onClick={onClose}>×</button>
                    </div>
                    <p>Try different keywords or browse our game categories.</p>
                </div>
            )}
        </div>
    );
}