const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const mongoose = require("mongoose");

const keys = require("../config/keys");
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
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
            const existingUser = await User.findOne({ googleId: profile.id });

            if (existingUser) {
                return done(null, existingUser);
            }

            const user = await new User({
                googleId: profile.id,
                username: profile.displayName
            }).save();
            done(null, user);
        }
    )
);

passport.use(
    new FacebookStrategy(
        {
            clientID: keys.facebookClientID,
            clientSecret: keys.facebookClientSecret,
            callbackURL: "/auth/facebook/callback",
            proxy: true
        },
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({ facebookId: profile.id });

            if (existingUser) {
                return done(null, existingUser);
            }

            const user = await new User({
                facebookId: profile.id,
                username: profile.displayName
            }).save();
            done(null, user);
        }
    )
);

passport.use(
    new LinkedInStrategy(
        {
            clientID: keys.linkedInClientID,
            clientSecret: keys.linkedInClientSecret,
            callbackURL: "/auth/linkedin/callback",
            // profileFields: [
            //     "first-name",
            //     "last-name",
            //     "email-address",
            //     "headline",
            //     "summary",
            //     "industry",
            //     "picture-url",
            //     "positions",
            //     "public-profile-url",
            //     "location"
            // ],
            // scope: ["r_basicprofile", "r_emailaddress"],
            state: true,
            proxy: true
        },
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({ linkedInId: profile.id });
            if (existingUser) {
                return done(null, existingUser);
            }
            const user = await new User({
                linkedInId: profile.id,
                username: profile.displayName
            }).save();
            done(null, user);
        }
    )
);
