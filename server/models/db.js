const mongoose = require("mongoose");
const { info } = require("./debug");

const DB_URI_STRING = process.env.DB_URI_STRING || "mongodb+srv://sana:sana@cluster0.vopin.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

mongoose.connect(DB_URI_STRING, {
	useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
	info("we're connected to database");
});
module.exports = db;
