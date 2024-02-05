const userDB = require("../models/user");

exports.handleGoogleAuth = async (accessToken, refreshToken, profile, done) => {
  // console.log("profile", profile);
  try {
    let user = await userDB.findOne({ googleId: profile.id });

    if (!user) {
      user = new userDB({
        googleId: profile.id,
        displayName: profile.displayName,
        email: profile.emails[0].value,
        image: profile.photos[0].value,
      });

      await user.save();
    }

    return done(null, user);
  } catch (error) {
    return done(error, null);
  }
};

exports.loginSuccess = async (req, res) => {
  if (req.user) {
    res.status(200).json({ user: req.user });
  } else {
    res.status(400).json({ Message: "Not Authorized" });
  }
};

exports.logoutSuccess = async (req, res)=>{
  req.logout(function(err){
    if(err){
      return next(err)
    }
    res.redirect('http://localhost:3000')
  })
}

