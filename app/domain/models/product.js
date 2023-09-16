class Product {
    constructor() {
      this.id = ""; // Unique identifier for the product
      this.name = {
        en: "", // Product name in English (can be extended for other languages)
      };
      this.slug = {
        en: "", // SEO-friendly URL segment (can be extended for other languages)
      };
      this.description = {
        en: "", // Product description (can be extended for other languages)
      };
      this.categories = []; // Array of category IDs the product belongs to
      this.masterVariant = new ProductVariant(); // The primary variant of the product
      this.variants = []; // Additional variants of the product
      this.productType = ""; // Type of product (e.g., physical, digital)
      this.createdAt = new Date(); // Timestamp of product creation
      this.lastModifiedAt = new Date(); // Timestamp of the last product modification
      this.customFields = {}; // Custom fields for additional data or metadata
    }
  }
  
  class ProductVariant {
    constructor() {
      this.id = 0; // Unique identifier for the variant
      this.sku = ""; // Stock Keeping Unit identifier for the variant
      this.attributes = []; // Array of variant-specific attributes
      this.images = []; // Array of variant images
      this.prices = []; // Array of variant prices
    }
  }
  