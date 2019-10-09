import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./src/routes/crmRoutes";

const app = express();

const port = process.env.PORT || 9000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/crmdb", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// setup static files access
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.send("welcome to CRM");
});

app.listen(port, () => {
  console.log(`Starting api on port ${port}`);
});
