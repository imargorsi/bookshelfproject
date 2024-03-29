const { models } = require("./index");

module.exports = {
  newBook: async (body) => {
    try {
      const book = await models.books.create({
        bookTitle: body.value.bookTitle,
        author: body.value.author,
        review: body.value.review,
        notes: body.value.notes,
        isbn: body.value.isbn,
        stars: body.value.stars,
      });

      return {
        response: book,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  allbooks: async () => {
    try {
      const getallbooks = await models.books.findAll();

      return {
        response: getallbooks,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  singlebook: async (id) => {
    try {
      const getbook = await models.books.findOne({
        where: {
          id: id,
        },
      });

      return {
        response: getbook,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  editNotes: async (bookid, notes) => {
    try {
      const bookNotes = await models.books.update(
        { notes: notes },
        { where: { id: bookid } }
      );

      return {
        response: bookNotes,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },

  deletebook: async (id) => {
    try {
      const deletedbook = await books.destroy({
        where: {
          id: id,
        },
      });

      return {
        response: deletedbook,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
