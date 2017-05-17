var express = require("express");
var bodyParser = require("body-parser");

var app = express();

const PORT = process.env.PORT;

// Sets up the Express app to handle data parsing
app. use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listener(PORT, function(){
	console.log("App listening on PORT" + PORT);
});
