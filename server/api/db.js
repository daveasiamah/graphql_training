const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://david:4C7VJevFFt1kOddi@cluster0.qwyt6.mongodb.net/books_db?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log(collection.find({}));
  client.close();
});

module.exports = client;
