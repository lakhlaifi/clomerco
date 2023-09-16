class Category {
    constructor() {
      this.id = ""; // Unique identifier for the category
      this.name = {
        en: "", // Category name in English (can be extended for other languages)
      };
      this.slug = {
        en: "", // SEO-friendly URL segment (can be extended for other languages)
      };
      this.parent = null; // Reference to the parent category, if any
      this.ancestors = []; // Array of ancestor categories leading to this category
      this.description = {
        en: "", // Description of the category (can be extended for other languages)
      };
      this.orderHint = ""; // Hint for the order of display among siblings
      this.createdAt = new Date(); // Timestamp of category creation
      this.lastModifiedAt = new Date(); // Timestamp of the last category modification
      this.customFields = {}; // Custom fields for additional data or metadata
    }
  }
  