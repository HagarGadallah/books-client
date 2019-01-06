const excelToJson = require('convert-excel-to-json');

module.exports.result = excelToJson({
    sourceFile: 'books.xlsx',
    sheets:[{
      name: 'books',
      header:{
          rows: 1
      },
      columnToKey: {
        A: 'title',
        B: 'author',
        C:'description',
        D: 'isbn',
        E: 'publishYear',
        F: 'pagesNumber',
        G: 'image',
        H: 'category'
      }
  },{
      name: 'authors',
      header:{
          rows: 1
      },
      columnToKey: {
        A: 'name',
        B: 'jobTitle',
        C: 'bio'
      }
  }]
});