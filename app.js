const express = require('express');
const router = express.Router();
const show = require('./show');
const add = require('./add');
const cut = require('./cut');
const update = require('./update');
const passwordMiddleware = require("./middleware");

const app = express();

app.use(express.json());
app.use("/show", show);
app.use("/", show);
app.use('/add', add);
app.use('/cut', passwordMiddleware);
app.use('/cut', cut);
app.use('/update', passwordMiddleware);
app.use('/update', update);

app.listen(4800, () => {
    console.log("OK");
});