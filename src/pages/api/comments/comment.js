export default function handler(req, res) {
    if (req.method == 'POST') {
        const{user_id, game_id, comment} = req.body;
        res.status(200).json({
            message: 'Post received successfully',
            data: {
                user_id: user_id,
                game_id: game_id,
                comment: comment,
            },
        });
    }
    else {
        res.status(405).json({error: "Wrong method!"});
    }
}
