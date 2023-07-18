const {
  addBook,
  // getAllNotesHandler,
  // getNoteByIdHandler,
  // editNoteByIdHandler,
  // deleteNoteByIdHandler,
} = require('./handler')

const routes = [
  // POST
  {
    method: 'POST',
    path: '/books',
    handler: addBook,
  },

  // GET
  // {
  //   method: 'GET',
  //   path: '/books',
  //   handler: getAllNotesHandler,
  // },
  // {
  //   method: 'GET',
  //   path: '/books/{bookId}',
  //   handler: getNoteByIdHandler,
  // },

  // PUT
  // {
  //   method: 'PUT',
  //   path: '/books/{bookId}',
  //   handler: editNoteByIdHandler,
  // },

  // DELETE
  // {
  //   method: 'DELETE',
  //   path: '/books/{bookId}',
  //   handler: deleteNoteByIdHandler,
  // },

];

module.exports = routes;