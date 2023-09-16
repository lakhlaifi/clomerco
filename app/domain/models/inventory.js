class Inventory {
    constructor() {
      this.id = ""; // Unique identifier for the inventory entry
      this.sku = ""; // Stock Keeping Unit identifier related to the inventory
      this.quantityOnStock = 0; // Available quantity for the SKU
      this.availableQuantity = 0; // Quantity available for sale
      this.reservedQuantity = 0; // Quantity reserved (e.g., in carts but not ordered)
      this.supplyChannel = null; // Reference to the supply channel, if any
      this.createdAt = new Date(); // Timestamp of inventory entry creation
      this.lastModifiedAt = new Date(); // Timestamp of the last inventory entry modification
    }
  }
  