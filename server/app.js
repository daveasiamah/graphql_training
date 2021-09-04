const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");
require("dotenv").config();
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(cors());

//Connect to database
const dbConnectionString = process.env.DB;
mongoose
  .connect(dbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection successful."))
  .catch((err) => console.log(err));

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

const port = process.env.PORT || 4000;
app.listen(port, () =>
  console.log(`Acme Reader Server Running on port ${port}`)
);
