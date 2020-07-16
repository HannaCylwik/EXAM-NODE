const express = require('express');
const router = express.Router();
const ads = require('./ads.json');
const fs = require('fs');

router.post('/', (req, res) => {
    let { nickname, category, ad, price } = req.body;
    const adToPush = { "nickname": nickname, "id": ads[ads.length - 1].id + 1, "category": [category], "ad": ad, "price": price.length > 0 ? price : price = 0 };
    nickname && category && ad ? (ads.push(adToPush), fs.writeFile('ads.json', JSON.stringify(ads), 'utf8', () => {
        res.status(200).send("Ogłoszenie dodane")
    })) : res.status(418).send("Something is missing");
});

module.exports = router;