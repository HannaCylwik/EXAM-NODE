const express = require('express');
const router = express.Router();
const ads = require('./ads.json');
const fs = require('fs');

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const filtered = ads.filter(ad => ad.id != id);
    const found = ads.find(ad => ad.id == id);
    const ifId = () => {
        fs.writeFile('ads.json', JSON.stringify(filtered), 'utf8', () => {
            res.status(200).send(`Ad number ${id} has been deleted`)
        });
    };
    found ? ifId() : res.status(404).send(`Ad number ${id} does not exist`);
});

module.exports = router;