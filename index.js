const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const app = express();

/* console.developers.google.com */
/* clientID 501241993264-u8tae954pgu9f968gjgpfufa4i903a94.apps.googleusercontent.com */
/* clientSecret BCD3tvfd3xM1FS9VgKxqHJWT */
passport.use(new GoogleStrategy());

/*app.get("/", (req, res) => {
  res.send({ hey: "Good Luck!" });
});*/

const PORT = process.env.PORT || 5000;
app.listen(PORT);
