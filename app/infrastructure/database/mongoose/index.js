const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ss:ss@ss.ss.ss.net/?retryWrites=true&w=majority&appName=AtlasApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
