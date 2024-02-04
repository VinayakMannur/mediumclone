const passport = require("passport");
const OAuth2Stratergy = require("passport-google-oauth2").Strategy;

const { handleGoogleAuth } = require("../controllers/authController");

passport.use(
  new OAuth2Stratergy(
    {
      clientID: process.env.ClientID,
      clientSecret: process.env.Clientsecret,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    handleGoogleAuth
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport;
