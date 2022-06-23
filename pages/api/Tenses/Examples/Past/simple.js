import data from "/data/TensesExs/Past/simple.js";

export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200).json(data);
    }
}
