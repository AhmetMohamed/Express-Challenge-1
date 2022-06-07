const express = require("express");
const app = express();

//=== Get Request ===
app.get("/home", (req, res) => {
  res.send("Found User");
});

// Express Json to Object
app.use(express.json());

//=== Post Request ===
app.post("/about", (req, res) => {
  //   console.log(req.body);
  if (req.body.username && req.body.password === "") {
    res.send("Username and Password can't be Empty📪");
  } else {
    res.send(req.body);
  }
});

//=== Put Request ===
app.put("/contact", (req, res) => {
  res.send("Username has been Edited");
});

//=== Delete Request ===
app.delete("/faq", (req, res) => {
  if (req.query.id === "") {
    res.send("ID Can't be Empty");
  } else {
    res.send(req.query.id);
  }
});

// ====== Port Listening ======
const port = 8080;
app.listen(port, () => {
  console.log(`App is Listen ${port}`);
});
