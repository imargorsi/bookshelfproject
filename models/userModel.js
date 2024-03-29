const { models } = require("./index");
const { Op } = require("sequelize");

module.exports = {
  register: async (body) => {
    try {
      const newuser = await models.user.create({
        fullName: body.firstName,
        email: body.email,
        password: body.password,
      });

      return {
        response: newuser,
      };
    } catch (error) {
      console.log(error);
    }
  },

  login: async (body) => {
    try {
      const user = await models.user.findOne({
        where: {
          email: body.email,
          password: body.password,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt"],
        },
      });

      return {
        response: user.dataValues,
      };
    } catch (error) {
      return {
        response: error,
      };
    }
  },

  getbooks: async (id) => {
    try {
      const userbooks = await models.books.findAll({
        where: {
          userId: id,
        },
      });

      const userbooksData = userbooks.map((book) => book.get({ plain: true }));

      return {
        response: userbooksData,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
