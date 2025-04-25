
export default function handler(req, res) {
    // if(req.method == 'POST') {

    // } else {

    // }
    res.status(200).json({
        game_id: "65210",
        title: "Snake",
        description: "Classic puzzle game",
        tags: "2D, puzzle",
        how_to_play: "arrow keys for movement",
        cover: "/whatever/resources/screenshot/snake.png"
    });
}