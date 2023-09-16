const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  id: String,
  version: Number,
  name: {
    type: Map,
    of: String
  },
  slug: {
    type: Map,
    of: String
  },
  parent: {
    typeId: String,
    id: String
  },
  ancestors: [String],
  orderHint: String,
  createdAt: Date,
  lastModifiedAt: Date
});

const CategoryModel = mongoose.model('Category', categorySchema);
