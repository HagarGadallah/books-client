const axios = require("axios");
const _ = require("lodash");
const { result } = require("./read");

const books = result.books;
const authors = result.authors;
var categories = [];
var createBookResponse, createAuthorResponse, createCategoryResponse;

(async () => {
  try {
    //pick out all categories in the file and push them to an array
    for (let i = 0; i < books.length; i++) {
      var pickedCategories = _.pick(books[i], "category");
      categories.push(pickedCategories.category);
    }

    var removedDuplicatesCategories = _.uniq(categories);

    //Create categories
    for (let i = 0; i < removedDuplicatesCategories.length; i++) {
      await axios
        .post("http://localhost:3000/api/category/create", {
          name: removedDuplicatesCategories[i]
        })
        .then(function(response) {
          createCategoryResponse = response.data;
          console.log(createCategoryResponse);
        })
        .catch(function(error) {
          console.log(error);
        });
    }

    // Creating Authors
    for (let i = 0; i < authors.length; i++) {
      await axios
        .post("http://localhost:3000/api/author/create", {
          name: authors[i].name,
          jobTitle: authors[i].jobTitle,
          bio: authors[i].bio
        })
        .then(function(response) {
          createAuthorResponse = response.data;
          console.log(createAuthorResponse);
        })
        .catch(function(error) {
          console.log(error);
        });
    }

    //Creating Books
    for (let i = 0; i < books.length; i++) {
      await axios
        .post("http://localhost:3000/api/book/create", {
          title: books[i].title,
          author: books[i].author,
          description: books[i].description,
          isbn: books[i].isbn,
          publishYear: books[i].publishYear,
          pagesNumber: books[i].pagesNumber,
          image: books[i].image,
          category: books[i].category
        })
        .then(function(response) {
          createBookResponse = response.data;
          console.log(createBookResponse);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
})(); ///FUNCTIOOONNNNNN ENNNNDDDDDDDDDD

// async function createCategory(){
//   return await axios.post("http://localhost:3000/api/category/create", {
//     name: books[0].category
//   });
// }

// async function createAuthor(){
//   return await axios.post("http://localhost:3000/api/author/create", {
//     name: books[0].author,
//     jobTitle: authors[10].jobTitle //"Dynamic Branding Analyst"
//    // bio: authors[10].bio
//   });
// }

// axios.all([createCategory(), createAuthor()])
//   .then(axios.spread(function (createCategoryResponse, createAuthorResponse) {
//     console.log('category', createCategoryResponse.data.data);
//     console.log('author', createAuthorResponse.data.data);
//     //console.log('book', createBookResponse.data.data);
//   }))
//   .catch(function(error) {
//     console.log(error);
//   });

// axios.all([
//   axios.get("http://localhost:3000/api/author/0bd54fc7-cad9-4b5e-9851-0368866e95fc"),
//   axios.put("http://localhost:3000/api/update/author/0bd54fc7-cad9-4b5e-9851-0368866e95fc", {
//     name: "updated name"
//   })
// ])
// .then(axios.spread(function (getResponse, updateResponse) {
//   console.log('author', getResponse.data.data);
//   console.log('author after update', updateResponse.data.data);
// }))
// .catch(function(error) {
//   console.log(error);
// });
