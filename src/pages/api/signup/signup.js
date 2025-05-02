export default function handler(req, res) {
    if (req.method == 'POST') {
        const{Username, Password, Gmail, Tel} = req.body;
        res.status(200).json({
            message: 'Post received successfully',
            data: {
                Username: Username,
                Password: Password,
                Gmail: Gmail,
                Tel: Tel
            },
        });
    }
    else {
        res.status(405).json({error: "Wrong method!"});
    }
  }
  
  // curl -X POST http://localhost:3000/whatever/api/signup/signup -H "Content-Type: application/json" -d "{\"Username\": \"pacman\", \"Password\": \"Classic puzzle game\", \"Gmail\": \"qwerty@gmail.com\", \"Tel\": \"9769745221 puzzle game\"}"
  