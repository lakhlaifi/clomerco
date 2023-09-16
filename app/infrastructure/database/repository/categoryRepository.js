class CategoryRepository {
    constructor(model) {
      this.model = model;
    }
  
    async findAll() {
      return await this.model.find();
    }
  
    async findById(id) {
      return await this.model.findOne({ id: id });
    }
  
    async findByKey(key) {
      return await this.model.findOne({ 'slug.en': key });
    }
  
    async query(criteria) {
      return await this.model.find(criteria);
    }
  
    async save(categoryData) {
      const category = new this.model(categoryData);
      return await category.save();
    }
  
    async update(id, categoryData) {
      return await this.model.findOneAndUpdate({ id: id }, categoryData, { new: true });
    }
  
    async delete(id) {
      return await this.model.findOneAndDelete({ id: id });
    }
  }
  
  module.exports = new CategoryRepository(CategoryModel);
  