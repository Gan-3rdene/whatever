export default function handler(req, res) {
    const {gid} = req.query
    res.end(`Post: ${gid}`)
}