const categoryService = require('../../../domain/services/categoryService');

const categoryResolvers = {
  Query: {
    getCategoryById: async (_, { id }) => {
      return await categoryService.getCategoryById(id);
    },
    getAllCategories: async () => {
      return await categoryService.getAllCategories();
    }
  },
  Mutation: {
    createCategory: async (_, { input }) => {
      return await categoryService.createCategory(input);
    },
    updateCategory: async (_, { id, input }) => {
      return await categoryService.updateCategoryById(id, input);
    },
    deleteCategory: async (_, { id }) => {
      await categoryService.deleteCategoryById(id);
      return true;
    }
  }
};

module.exports = categoryResolvers;
