const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const OAuth2Stratergy = require("passport-google-oauth2").Strategy;
const userDB = require("./models/user");

require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(bodyParser.json({ extended: false }));
app.use(cors());
const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));


app.use(
  session({
    secret: process.env.SESSIONSECRETE,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", authRoutes);

mongoose
  .connect(
    `mongodb+srv://vinayakmannur20:${process.env.PASSWORD}@cluster0.xeaa25h.mongodb.net/?retryWrites=true&w=majority`
  )
  .then((result) => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Avengers assemble at PORT ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));