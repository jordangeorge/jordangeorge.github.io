var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var postSchema = new Schema({
  id: Schema.Types.ObjectId,
  title: String,
  content: String,
  published: String,
  img_name: String,
});

// Export the model
module.exports = mongoose.model('PostModel', postSchema);