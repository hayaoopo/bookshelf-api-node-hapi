const {
  addBooks,
  getAllBooks,
  getBooksById,
  editBooksById,
  deleteBooksById,
} = require('./handler')

const routes = [
  // POST
  {
    method: 'POST',
    path: '/books',
    handler: addBooks,
  },

  // GET
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooks,
  },

  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBooksById,
  },

  // PUT
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBooksById,
  },

  // DELETE
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBooksById,
  },

];

module.exports = routes;