const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require('./routes/categoryRoutes')
const postRoutes = require('./routes/postRoutes')
const commentRoute = require('./routes/commentRoutes')

const app = express();
app.use(cookieParser());
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
app.use(categoryRoutes)
app.use(postRoutes)
app.use(commentRoute)

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
