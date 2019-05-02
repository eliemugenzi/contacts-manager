import express from "express";
import bodyParser from "body-parser";
const app = express();
import contactRouter from "./server/routes/Contact.route";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/v1/contacts", contactRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Hello world"
  });
});

app.listen(process.env.PORT || 3000, () => console.log("Server started!"));
