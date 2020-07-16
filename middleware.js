const passwordMiddleware = (req, res, next) => {
    const [password] = req.headers.password.split(":");
    password === "egzamin" ? next() : res.status(418).send("Something is not yes.")
}

module.exports = passwordMiddleware;