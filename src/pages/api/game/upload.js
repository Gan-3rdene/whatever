export default function handler(req, res) {
    if (req.method == 'POST') {
        const{title, description, tags, how_to_play, file} = req.body;
        res.status(200).json({
            message: 'Post received successfully',
            data: {
                title: title,
                description: description,
                tags: tags,
                how_to_play: how_to_play,
                file: file,
            },
        });
    }
    else {
        res.status(405).json({error: "Wrong method!"});
    }
}

// curl -X POST http://localhost:3000/whatever/api/post/upload -H "Content-Type: application/json" -d "{\"title\": \"pacman\", \"description\": \"Classic puzzle game\", \"tags\": \"Puzzle\", \"how_to_play\": \"arrow keys\", \"file\": \"...\"}"