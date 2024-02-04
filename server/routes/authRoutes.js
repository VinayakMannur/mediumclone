const express = require("express");
const passport = require('../middlewares/passportMiddleware')
const { loginSuccess } = require('../controllers/authController')

const router = express.Router();

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "http://localhost:3000/login",
  })
);

router.get("/login/success", loginSuccess);

module.exports = router;