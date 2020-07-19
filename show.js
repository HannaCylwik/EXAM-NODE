const express = require('express');
const router = express.Router();
const ads = require('./ads.json');

router.get('/', (req, res) => {
    const mapped = ads.map(ad => `Nickname: ${ad.nickname}, category: ${ad.category}, ad: ${ad.ad}, price: ${ad.price}`)
    res.send(mapped + "\n");
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const found = ads.find(ad => ad.id == Number(id));
    found ? res.status(200).send(Object.entries(found)) : res.status(404).send(`Given id "${id}" not found`);
});

router.get('/cat/:category', (req, res) => {
    const { category } = req.params;
    const filtered = ads.filter(ad => ad.category.includes(category) ? category : null);
    filtered.length > 0 ? res.status(200).send(`${filtered.map(el => `\n${Object.entries(el)}\n`)}`) : res.status(404).send(`Given category "${category} not found`)
});

router.get('/nick/:nickname', (req, res) => {
    const { nickname } = req.params;
    const filtered = ads.filter(ad => ad.nickname === nickname);
    filtered.length > 0 ? res.status(200).send(`${filtered.map(el => `\n${Object.entries(el)}\n`)}`) : res.status(404).send(`Given nickname "${nickname} not found`)
});

router.get('/price/:price', (req, res) => {
    const { price } = req.params;
    const filtered = ads.filter(ad => ad.price == price);
    filtered.length > 0 ? res.status(200).send(`${filtered.map(el => `\n${Object.entries(el)}\n`)}`) : res.status(404).send(`Given price "${price} not found`)
});

module.exports = router;