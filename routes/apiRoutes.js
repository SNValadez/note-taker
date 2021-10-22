const router = require('express').Router();
const db = require("../db/db.json")

router.get("/notes", (req, res) => {
    
    return res.json(db);
});

console.log(db);
module.exports = router;