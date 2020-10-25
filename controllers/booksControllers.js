const db = require ("../models");

//booksController

module.exports = {
    findAll: function (req, res) {
        db.Book
        .find (req, query)
        .sort ({ date: -1})
        .then (dbModel => res.json (dbMode1))
        .catch(err => {
            console.error(err)
            res.status (422).json (err)
        });
    },
    findById: Function (req, res) {
        db.Book 
    }
}