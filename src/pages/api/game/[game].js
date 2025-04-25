
export default function handler(req, res) {
    const {game} = req.query
    res.status(200).json({
        game_id: game,
        title: "Snake",
        description: "Classic puzzle game",
        tags: "2D, puzzle",
        how_to_play: "arrow keys for movement",
        cover: "/whatever/resources/screenshot/snake.png"
    });
}