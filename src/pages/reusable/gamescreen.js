import { useState, useEffect } from "react";
import gameModules from "../reusable/gamemodule.js";

export default function GameScreen() {
    const [gameData, setGameData] = useState(null);
    const [GameComponent, setGameComponent] = useState(null);

    useEffect(() => {
        const fetchGame = async ()=> {
            const gameId = sessionStorage.getItem("selectedGameID");
            if(!gameId) return;
            try {
                const res = await fetch(`http://localhost:5005/gamequery`);
                const games = await res.json();
                const selectedGame = games.find(game => game.game_id === Number(gameId));
                setGameData(selectedGame);

                if(selectedGame?.file) {
                    const gameFile = selectedGame.file.replace("../games/", "").replace(".js", "");
                    if(gameModules[gameFile]) {
                        const module = await gameModules[gameFile]();
                        setGameComponent(()=>module.default);
                    }
                    else {
                        console.error(`Game file ${gameFile} not found`);
                    }
                    // const module = await import(`${selectedGame.file}`);
                    // setGameComponent(() => module.default);
                }
            } catch (error) {
                console.error("error fetching game", error);
            }
        };
        
        fetchGame();

    }, []);

    if(!gameData) return <p>Loading..</p>
    if(!GameComponent) return <p>Loading game..</p>
    return (
        <GameComponent/>
    )
}