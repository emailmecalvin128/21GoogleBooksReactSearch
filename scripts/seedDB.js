const mongoose = require("mongoose");
const db = require("../models");

// Deletes books collection and inserts the books below 

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"

);

const bookSeed =
{
    authors: ["Suzanne Collins"],
    description: "Set in a dark vision of the near future, a terrifying realtiy TV show is taking place. Twelve boys and twelve girls are forced to apper in a live event called the Hunger games there is only one rule: Kill or be Killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her survival is a second nature."
    Image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
    title: "The Hunger Games",

db.Book
.remove ({})
.then (() => db.Book.collection.insertMany(bookSeed))
.then(data =>) {
    console.log (data.result.n + "records insert!");
    process.exit (0);
})
.catch (err => {
    console.error(err);
    process.exit(1);
})