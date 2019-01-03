const axios = require("axios");

axios
  .post("http://localhost:3000/api/category", {
    page: 1,
    size: 5,
    sortBy: "name"
  })
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(error) {
    console.log(error);
  });

// axios
//   .get(
//     "http://localhost:3000/api/category/dc1d741a-d4e9-4e64-b33a-4eeb0970903c"
//   )
//   .then(function(response) {
//     console.log(response.data);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });
