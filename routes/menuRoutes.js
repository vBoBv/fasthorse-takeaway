const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');

const Menu = mongoose.model('menus');

module.exports = (app) => {
	app.get('/api/menus', requireLogin, async (req, res) => {
		const menus = await Menu.find({ _user: req.user.id });

		res.send(menus);
	});

	app.post('/api/menus', requireLogin, async (req, res) => {
		// console.log(req.body.item.category);
		// const { category, foodTitle, foodPrice, foodDescription } = req.body;
		const { item, menuName, menuDescription } = req.body;
		console.log(item);

		const menu = new Menu({
			menuName,
			menuDescription,
			item: item.map((eachItem) => ({
				category: eachItem.category,
				foodList: eachItem.foodList.map((eachFood) => ({
					foodTitle: eachFood.foodTitle,
					foodPrice: eachFood.foodPrice,
					foodDescription: eachFood.foodDescription
				}))
			})),
			_user: req.user.id
		});
		try {
			const savedMenu = await menu.save();

			res.send(savedMenu);
		} catch (err) {
			res.status(422).send(err);
		}
	});

	// app.get(`/api/menu`, requireLogin, async (req, res) => {
	// 	const menu = await Menu.find({ _id: req.menus._id });

	// 	res.send(menu);
	// });
};
