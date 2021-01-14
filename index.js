const express = require('express')
const app = express()
    //use hosting port and settings or use 5000;
const PORT = process.env.PORT || 5000;




app.listen(PORT, () => console.log('Server Listening on port ' + PORT));