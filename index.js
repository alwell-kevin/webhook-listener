// BEGIN SERVER DECLARATION
var express = require('express');
const port = process.env.PORT || 3000;
const app = express();
// END SERVER DECLARATION

// BEGIN BODY PARSE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
// END BODY PARSE

// BEGIN ROUTES
//DOES NOTHING>>>> YET
app.all("/event", (req, res) => {
  console.log("Event Received: ", ,req.body);

  res.status(200);
})

// LAUNCH SERVER
app.listen(port, () => {
  console.log('Express server started on port ' + port);
})
