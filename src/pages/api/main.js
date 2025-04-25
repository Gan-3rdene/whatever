
export default function handler(req, res) {
    res.status(200).json([ {
            game_id: "65210",
            title: "Snake",
            tags: "2D, Puzzle, ..",
        }, {
            game_id: "65211",
            title: "Ape out",
            tags: "2D, Action, ..",
        }, {
            game_id: "65212",
            title: "Sonic",
            tags: "Adventure, ..",
        }, {
            game_id: "65102",
            title: "Angrybird",
            tags: "Puzzle, ..",
        }, {
            game_id: "63214",
            title: "The binding of isaac",
            tags: "Action, ..",
        }
    ]
);
}
  