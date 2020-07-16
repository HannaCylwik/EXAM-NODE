const express = require('express');
const router = express.Router();
const ads = require('./ads.json');
const fs = require('fs');

router.put('/:id', (req, res) => {
    const { nickname, category, ad } = req.body;
    const { id } = req.params;
    const toUpdate = ads.find(ad => ad.id == id);
    const adToPut = () => {
        toUpdate.nickname = nickname;
        toUpdate.category = category;
        toUpdate.ad = ad;
        const afterUpdate = ads.map(ad => ad.id == id ? toUpdate : ad);
        fs.writeFile("ads.json", JSON.stringify(afterUpdate), 'utf8', () => {
            res.status(200).send(`Ad numer ${id} was changed`);
        });
    };
    toUpdate ? adToPut() : res.status(404).send(`Enter id which exists`);
});

module.exports = router;