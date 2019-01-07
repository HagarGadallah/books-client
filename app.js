const axios = require("axios");
const _ = require("lodash");
const {result} = require("./read");

const books = result.books;
const authors = result.authors;
var createBookResponse, createAuthorResponse, createCategoryResponse;

var currentAuthor = _.find(authors,function(i) {
  return i.name == books[0].author;
});
var currentJobTitle = currentAuthor.jobTitle;
var currentBio = currentAuthor.bio;

console.log(currentJobTitle);
console.log(currentBio);

//COMMENTTTTTTT 
axios
  .post("http://localhost:3000/api/author/create", {
    name: books[0].author,
    jobTitle: currentJobTitle,
    bio: currentBio
  })
  .then(function(response) {

    createAuthorResponse = response.data;
    console.log(createAuthorResponse);

     axios.post("http://localhost:3000/api/category/create", {
      name: books[0].category
    })
    .then(function(response) {
      createCategoryResponse = response.data;
      console.log(createCategoryResponse);

    axios.post("http://localhost:3000/api/book/create", {
    title: books[0].title,
    author: books[0].author,
    description: books[0].description,
    isbn: books[0].isbn,
    publishYear: books[0].publishYear,
    pagesNumber: books[0].pagesNumber,
    image: books[0].image,
    category: books[0].category
  })
  .then(function(response) {
    createBookResponse = response.data;
    console.log(createBookResponse);
   }).catch(function(error) {
    console.log(error);
  })
  
    })
    .catch(function(error) {
      console.log(error);
    });

  })
  .catch(function(error) {
    console.log(error);
  });
//COMMENTTTTT ENDDDDD

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