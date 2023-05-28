import express from "express";
import path from "path";
import routes from "./routes";
import bodyParser from "body-parser";
import session from "express-session";
import flash from "connect-flash";

const app = express();
const port = 3000;

app.use(
  session({
    secret: "your secret key",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(flash());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
