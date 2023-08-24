import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    list,
  });
});

app.get("/work", (req, res) => {
  res.render("work.ejs", {
    workList,
  });
});

const list = [];
app.post("/submit", (req, res) => {
  const task = req.body["task"];

  list.push(task);

  res.render("index.ejs", {
    list,
  });
});

const workList = [];
app.post("/submitWorkList", (req, res) => {
  const task = req.body["task"];

  workList.push(task);

  res.render("work.ejs", {
    workList,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
