const res = require("express/lib/response");

const logErrors = (err, req, res, next) => {
    console.error("Error", err);
    next(err);
}

const unhandledErrorHandler = (err, req, res, next) => {
    res.status(500).send({ code: "INTERNAL_SERVER_ERROR", message: "Something failed!" });
}

process.on('unhandledRejection', error => {
    console.error('unhandledRejection: ', error);
    throw error;
});

process.on('uncaughtException', error => {
    console.error('uncaughtException: ', error);
    process.exit(1);
});

module.exports = {
    logErrors,
    unhandledErrorHandler
};
