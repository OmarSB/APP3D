var mongoose = require("mongoose");
class Database {
  constructor() {}
  async connect() {
    try {
      await mongoose.connect(
          "mongodb+srv://osaucedoborja:omarsaucedo@cluster0-r5e3c.mongodb.net/App3D?retryWrites=true",
        { useNewUrlParser: true }
      );
      console.log("Connected databases.");
    } catch (e) {
      console.error(e);
    }
  }
}

exports.database = new Database();
