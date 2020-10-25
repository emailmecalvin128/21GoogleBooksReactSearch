const mongoose = require ("mongoose");
const db = require ("../models");

// Deletes books collection and inserts the books below 

mongoose.connect (
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks" 

);

const bookSeed =
{
    authors: ["Suzanne Collins"],
    description: "Set in a dark vision of the near future, a terrifying realtiy TV show is taking place. Twelve boys and twelve girls are forced to apper in a live event called the Hunger games there is only one rule: Kill or be Killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her survival is a second nature."
}