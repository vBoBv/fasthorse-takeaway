const passport = require("passport");

module.exports = (app) => {
    //Google OAuth
    app.get(
        "/auth/google",
        passport.authenticate("google", {
            scope: ["profile", "email"]
        })
    );

    app.get(
        "/auth/google/callback",
        passport.authenticate("google"),
        (req, res) => {
            res.redirect("/");
        }
    );

    //Facebook OAuth
    app.get(
        "/auth/facebook",
        passport.authenticate("facebook", {
            scope: ["public_profile", "email"]
        })
    );

    app.get(
        "/auth/facebook/callback",
        passport.authenticate("facebook"),
        (req, res) => {
            res.redirect("/");
        }
    );

    //LinkedIn OAuth
    app.get(
        "/auth/linkedin",
        passport.authenticate("linkedin", {
            scope: ["r_liteprofile", "r_emailaddress"]
        })
    );

    app.get(
        "/auth/linkedin/callback",
        passport.authenticate("linkedin"),
        (req, res) => {
            res.redirect("/");
        }
    );

    app.get("/api/logout", (req, res) => {
        req.logout();
        // res.send(req.user);
        res.redirect("/");
    });

    //Test the authentication flow - produce the user info after login
    app.get("/api/current_user", (req, res) => {
        // res.send(req.session);
        res.send(req.user);
    });
};
