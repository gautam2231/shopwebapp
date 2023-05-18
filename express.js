var express = require('express');
var app = express();
app.set('view-engine' , 'ejs')

const http = require("http");

const port = 3000;

var mongoose = require("mongoose");
const bodyparser = require("body-parser");
const { info } = require('console');

var urlencodedParser = bodyparser.urlencoded({ extended: false });
app.use(urlencodedParser);
mongoose.connect(
  "mongodb+srv://ROOT:darsh_gautam@cluster2.8ryoiq8.mongodb.net/test"
);


var barberSchema = new mongoose.Schema({
  name: String,
  number: String,
  address: String,
  link: String,
  shop_name: String,
  description:String,
});

var barber = mongoose.model("barber", barberSchema);

app.post("/barber.html", (req, res) => {
  let d = req.body;
  d["Status"] = "Pending";
  var mydata = new  barber(d);
  mydata
    .save()
    .then(() => {
      res.sendFile(__dirname + "/home.html");
    })
    .catch(() => {
      res.status(400).send("item was not saved to the database");
    });
});

var clothesSchema = new mongoose.Schema({
  name: String,
  number: String,
  address: String,
  link: String,
  shop_name: String,
  description:String,
});

var clothes = mongoose.model("clothes", clothesSchema);

app.post("/clothes.html", (req, res) => {
  let d = req.body;
  d["Status"] = "Pending";
  var mydata = new  clothes(d);
  mydata
    .save()
    .then(() => {
      res.sendFile(__dirname + "/home.html");
    })
    .catch(() => {
      res.status(400).send("item was not saved to the database");
    });
});

var grocerySchema = new mongoose.Schema({
  name: String,
  number: String,
  address: String,
  link: String,
  shop_name: String,
  description:String,
});

var grocery = mongoose.model("grocery", grocerySchema);

app.post("/grocery.html", (req, res) => {
  let d = req.body;
  d["Status"] = "Pending";
  var mydata = new  grocery(d);
  mydata
    .save()
    .then(() => {
      res.sendFile(__dirname + "/home.html");
    })
    .catch(() => {
      res.status(400).send("item was not saved to the database");
    });
});

var gymSchema = new mongoose.Schema({
  name: String,
  number: String,
  address: String,
  link: String,
  shop_name: String,
  description:String,
});

var gym = mongoose.model("gym", gymSchema);

app.post("/gym.html", (req, res) => {
  let d = req.body;
  d["Status"] = "Pending";
  var mydata = new  gym(d);
  mydata
    .save()
    .then(() => {
      res.sendFile(__dirname + "/home.html");
    })
    .catch(() => {
      res.status(400).send("item was not saved to the database");
    });
});

var stationarySchema = new mongoose.Schema({
  name: String,
  number: String,
  address: String,
  link: String,
  shop_name: String,
  description:String,
});

var stationary = mongoose.model("stationary", stationarySchema);

app.post("/stationary.html", (req, res) => {
  let d = req.body;
  d["Status"] = "Pending";
  var mydata = new  stationary(d);
  mydata
    .save()
    .then(() => {
      res.sendFile(__dirname + "/home.html");
    })
    .catch(() => {
      res.status(400).send("item was not saved to the database");
    });
});

app.get('/' , function(req , res) {
    res.sendFile(__dirname + '/home.html')
})
app.get('/barber.html' , function(req , res) {
    res.sendFile(__dirname + '/barber.html');
})
app.get('/clothes.html' , function(req , res) {
  res.sendFile(__dirname + '/clothes.html')
})
app.get('/gym.html' , function(req , res) {
    res.sendFile(__dirname + '/gym.html')
  })
app.get('/grocery.html' , function(req , res) {
  res.sendFile(__dirname + '/grocery.html')
})
app.get('/stationary.html' , function(req , res){
  res.sendFile(__dirname + '/stationary.html')
})
app.get('/grocery_table.html' , function(req , res) {
  res.sendFile(__dirname + '/grocery_table.html')
})
app.get('/stationary_table.html' , function(req , res) {
  res.sendFile(__dirname + '/stationary_table.html')
})
app.get('/gym_table.html' , function(req , res) {
  res.sendFile(__dirname + '/gym_table.html')
})
app.get('/barber_table.html' , function(req , res) {
  res.sendFile(__dirname + '/barber_table.html')
})
app.get('/clothes_table.html' , function(req , res) {
  res.sendFile(__dirname + '/clothes_table.html')
})

app.get("/findall", (req, res) => {
  barber.find({})
    .then((data) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.send(data);
    })
    .catch(() => {
      console.log("error showed ");
    });
});

app.get("/findal", (req, res) => {
  clothes.find({})
    .then((data) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.send(data);
    })
    .catch(() => {
      console.log("error showed ");
    });
});

app.get("/finda", (req, res) => {
  grocery.find({})
    .then((data) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.send(data);
    })
    .catch(() => {
      console.log("error showed ");
    });
});

app.get("/find", (req, res) => {
  gym.find({})
    .then((data) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.send(data);
    })
    .catch(() => {
      console.log("error showed ");
    });
});

app.get("/fin", (req, res) => {
  stationary.find({})
    .then((data) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.send(data);
    })
    .catch(() => {
      console.log("error showed ");
    });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});