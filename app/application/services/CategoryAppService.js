const categoryService = require('../../domain/services/categoryService');
const categoryRepository = require('../../infrastructure/database/repository/categoryRepository');

class CategoryAppService {
  
  /**
   * Use case: Create a new category.
   *
   * @param {Object} categoryData - The data for the new category.
   * @returns {Object} - The created category.
   * @throws {Error} - Throws an error if validation fails or if there's an issue with persistence.
   */
  async createCategory(categoryData) {
    // Input validation
    if (!categoryService.isValidCategoryName(categoryData)) {
      throw new Error("Invalid category name");
    }

    if (!categoryService.isValidCategorySlug(categoryData)) {
      throw new Error("Invalid category slug");
    }

    if (categoryData.parent && !categoryService.canBeChild(categoryData.parent, categoryData)) {
      throw new Error("Invalid parent-child relationship");
    }

    // Persist the category
    return await categoryRepository.save(categoryData);
  }

  /**
   * Use case: Update a category.
   *
   * @param {string} categoryId - The ID of the category to update.
   * @param {Object} updateData - The data to update.
   * @returns {Object} - The updated category.
   * @throws {Error} - Throws an error if validation fails or if there's an issue with persistence.
   */
  async updateCategory(categoryId, updateData) {
    // Input validation
    if (updateData.name && !categoryService.isValidCategoryName(updateData)) {
      throw new Error("Invalid category name");
    }

    if (updateData.slug && !categoryService.isValidCategorySlug(updateData)) {
      throw new Error("Invalid category slug");
    }

    if (updateData.parent) {
      const currentCategory = await categoryRepository.getById(categoryId);
      if (!categoryService.canBeChild(updateData.parent, currentCategory)) {
        throw new Error("Invalid parent-child relationship");
      }
    }

    // Update the category in the database
    return await categoryRepository.updateById(categoryId, updateData);
  }

  /**
   * Use case: Fetch a category by ID.
   *
   * @param {string} categoryId - The ID of the category to fetch.
   * @returns {Object} - The fetched category.
   */
  async getCategoryById(categoryId) {
    return await categoryRepository.getById(categoryId);
  }

  /**
   * Use case: Delete a category.
   *
   * @param {string} categoryId - The ID of the category to delete.
   * @returns {Object} - The deleted category.
   */
  async deleteCategory(categoryId) {
    return await categoryRepository.deleteById(categoryId);
  }

  // Other use cases related to categories can be added here.
}

module.exports = new CategoryAppService();
