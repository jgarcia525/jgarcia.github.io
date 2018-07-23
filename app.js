var express = require("express"),
		app 		= express();

// APP CONFIG
app.set("view engine", "ejs");
app.use(express.static("public"));

// ROUTES

// Index
app.get("/", function(req, res) {
	res.render("index");
});


app.listen(3000, function() {
	console.log("Server is running.");
});

