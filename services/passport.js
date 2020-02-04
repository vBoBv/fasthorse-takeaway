const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");

const keys = require("../config/keys");

const GoogleUser = mongoose.model("googleUsers");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    GoogleUser.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: "/auth/google/callback",
            proxy: true
        },
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await GoogleUser.findOne({
                googleId: profile.id
            });
            if (existingUser) {
                return done(null, existingUser);
            }
            //else
            const newUser = await new GoogleUser({
                googleId: profile.id,
                username: profile.displayName
            }).save();
            done(null, newUser);
        }
    )
);
