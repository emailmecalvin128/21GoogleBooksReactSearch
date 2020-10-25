import axios from "axios";

export default {
    getBook: function (query) {
        return axios.get (`https://www.googleapis.com/books/v1/volumes?q=${query}`);

    },
    // Deletes the book with the id 
    deleteBook: function (id) {
        return axios.delete ("/api/books/" + id). then (result => result.data);
    },
    // Saves a book to the db
    saveBook: function (bookData) {
        return axios.post ("/api/books", bookData). then(result => result.data);
    },
    //Get saved a book from the db
    savedBooks: function () {
        return axios.get ("/api/books"). then (result => result.data);
    }
}