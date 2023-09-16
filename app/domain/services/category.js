class CategoryService {
  
    /**
     * Business logic to check if a category can be a child of another category.
     * This is a basic example and can be expanded based on specific business rules.
     *
     * @param {Object} parentCategory - The parent category.
     * @param {Object} childCategory - The child category being checked.
     * @returns {boolean} - Returns true if the childCategory can be a child of parentCategory, false otherwise.
     */
    canBeChild(parentCategory, childCategory) {
      // For this example, we'll simply ensure that a category cannot be its own parent.
      if (parentCategory.id === childCategory.id) {
        return false;
      }
  
      // Additional business rules can be added here.
      // For example, checking for cyclic dependencies, ensuring a category doesn't exceed a certain depth in the hierarchy, etc.
  
      return true;
    }
  
    /**
     * Business logic to validate the category name.
     * This is a basic example to ensure that category names are not empty.
     *
     * @param {Object} category - The category being validated.
     * @returns {boolean} - Returns true if the category name is valid, false otherwise.
     */
    isValidCategoryName(category) {
      const name = category.name && category.name.en;
      return name && name.trim().length > 0;
    }
  
    /**
     * Business logic to validate the category slug.
     * This is a basic example to ensure that category slugs are not empty and are URL-friendly.
     *
     * @param {Object} category - The category being validated.
     * @returns {boolean} - Returns true if the category slug is valid, false otherwise.
     */
    isValidCategorySlug(category) {
      const slug = category.slug && category.slug.en;
      if (!slug || slug.trim().length === 0) {
        return false;
      }
  
      // Ensure the slug is URL-friendly. This is a basic regex check and can be expanded.
      const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
      return slugRegex.test(slug);
    }
  
    // Any other core business logic related to categories can be added here.
  }
  
  module.exports = new CategoryService();
  