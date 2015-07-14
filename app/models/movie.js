var mongoose =  require('mongoose');
var Schema = mongoose.Schema;
var appSchema = new Schema({
	title: String,
	releaseYear: String,
	director: String,
	genre: String
});

module.exports = mongoose.model('Movie',appSchema);