const express = require('express');
const app = express();
const homeRouter = require('./routes/home.routes');
const appRouter = require('./routes/app.routes');
const crypto = require('crypto');
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");
const mongoose = require('mongoose')
require('dotenv').config();
const corsOptions = {
  origin: "*",
};
// Allow Cross-Origin requests
app.use(cors(corsOptions));

// Data sanitization against Nosql query injection
app.use(mongoSanitize());

// Data sanitization against XSS(clean user input from malicious HTML code)

mongoose
  .connect(
    process.env.MONGO
  )
  .then(async () => {
    console.log("Kết nói tc!!");
  });

app.use('/home/', homeRouter);
app.use('/app/', appRouter);


app.listen(3005, ()=> {
    console.info("It's running localhost:3005")
})