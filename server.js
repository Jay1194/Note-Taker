// dependancies
const express = require('express');
const app = express();

// route files
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

//intialize express
const PORT = process.env.port || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());  
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);



// setup Listener
app.listen(PORT, () => {
    console.log(`APP listening on port ${PORT}`)
});