const mongoose = require("mongoose");

const requireLogin = require("../middlewares/requireLogin");

const Menu = mongoose.model("menus");

module.exports = (app) => {
    app.get("/api/menus", requireLogin, async (req, res) => {
        const menus = await Menu.find({ _user: req.user.id });

        res.send(menus);
    });

    app.post("/api/menus", requireLogin, async (req, res) => {
        const { title, price, description } = req.body;

        const menu = new Menu({
            title,
            price,
            description,
            _user: req.user.id
        });
        try {
            const savedMenu = await menu.save();

            res.send(savedMenu);
        } catch (err) {
            res.status(422).send(err);
        }
    });
};
