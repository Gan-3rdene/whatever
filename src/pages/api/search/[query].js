// export default function handler(req, res) {
//     const {gid} = req.query
//     res.end(`Post: ${gid}`)
// }
// import { NextRequest } from "next/server";

export default function handler(req, res) {
    const {query} = req.query;
    res.status(200).json({result: `You searched for: ${query}`});
}