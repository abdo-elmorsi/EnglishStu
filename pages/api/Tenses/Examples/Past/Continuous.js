import data from "/data/TensesExs/Past/Continuous.js";
export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200).json(data);
    }
}
