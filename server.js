require("dotenv/config");
const app = require("./app");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected To MongoDB"))
  .catch((err) => console.error("Mongodb Connection Failed"));

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`App Running On Port ${port}!`);
});
