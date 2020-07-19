const passwordMiddleware = (req, res, next) => {
    if (req.headers.password) {
        const [password] = req.headers.password.split(":");
        password === "egzamin" ? next() : res.status(418).send("Something is not yes.")
    } else {
        res.status(418).send("Not authorized.")
    }


}

module.exports = passwordMiddleware;