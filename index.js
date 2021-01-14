const express = require('express');
const app = express();
const path = require('path');
//use hosting port and settings or use 5000;
const PORT = process.env.PORT || 5000;

// Set static folder (can be named anything (public ex.))
//Serve static files from multiple directories, but give precedence to “./public” over the others:
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => console.log('Server Listening on port ' + PORT));