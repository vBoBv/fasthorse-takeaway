const defaultMenuReducer = () => {
	return {
		item: [
			{
				category: 'Fast Horse Special Dishes',
				foodList: [
					{
						foodTitle: 'Special Chow Mein',
						foodPrice: 12.0,
						foodDescription:
							'Combination meat, broccoli, califlower, onion, carrot, cashew nut, crispy noodles'
					},
					{
						foodTitle: 'Special Fried Rice',
						foodPrice: 12.0,
						foodDescription:
							'Combination meat, peas, onion, sweetcorn, cashew nut, egg, rice'
					},
					{
						foodTitle: 'Scallops, Mushroom & Vegies',
						foodPrice: 25.0,
						foodDescription:
							'Scallop, mushroom, broccoli, califlower, onion, carrot'
					},
					{
						foodTitle: 'Squid, Mushroom & Vegies',
						foodPrice: 25.0,
						foodDescription:
							'Squid, mushroom, broccoli, califlower, onion, carrot'
					},
					{
						foodTitle: 'Seafood Chow Mein',
						foodPrice: 15.0,
						foodDescription:
							'Combination seafood, broccoli, califlower, onion, carrot, crispy noodles'
					},
					{
						foodTitle: 'Seafood Fried Rice',
						foodPrice: 15.0,
						foodDescription:
							'Combination seafood, peas, onion, sweetcorn, egg, rice '
					},
					{
						foodTitle: 'Chicken Black Bean & Vegies',
						foodPrice: 12.0,
						foodDescription:
							'Chicken, broccoli, califlower, onion, carrot, mushroom, with your choice of crispy noodles or rice'
					},
					{
						foodTitle: 'Steak & Black Bean',
						foodPrice: 12.0,
						foodDescription:
							'Steak, broccoli, califlower, onion, carrot, mushroom, with your choice of crispy noodles or rice'
					},
					{
						foodTitle: 'Pork & Black Bean',
						foodPrice: 12.0,
						foodDescription:
							'Pork, broccoli, califlower, onion, carrot, mushroom, with your choice of crispy noodles or rice'
					}
				]
			},
			{
				category: 'Burgers',
				foodList: [
					{
						foodTitle: 'Ham Burger',
						foodPrice: 2.5,
						foodDescription: 'Pattie, onion, lettuce, tomato sauce'
					},
					{
						foodTitle: 'Cheese Burger',
						foodPrice: 3.0,
						foodDescription: 'Pattie, cheese, onion, lettuce, tomato sauce'
					},
					{
						foodTitle: 'Hawaiian Burger',
						foodPrice: 3.0,
						foodDescription: 'Pattie, pineapple, onion, lettuce, tomato sauce'
					},
					{
						foodTitle: 'Chicken Burger',
						foodPrice: 4.0,
						foodDescription: 'Chicken, onion, lettuce, mayonnaise'
					},
					{
						foodTitle: 'Steak Burger',
						foodPrice: 4.0,
						foodDescription: 'Steak, onion, lettuce, tomato sauce'
					},
					{
						foodTitle: 'Bacon Burger',
						foodPrice: 3.0,
						foodDescription: 'Bacon, onion, lettuce, tomato sauce'
					},
					{
						foodTitle: 'Bacon & Egg Burger',
						foodPrice: 3.8,
						foodDescription: 'Bacon, egg, onion, lettuce, tomato sauce'
					},
					{
						foodTitle: 'Fish Burger',
						foodPrice: 3.5,
						foodDescription: 'Fish, onion, lettuce, tartare sauce'
					}
				]
			},
			{
				category: 'Fried Rice Dishes',
				foodList: [
					{
						foodTitle: 'BBQ Pork Fried Rice',
						foodPrice: 10.5,
						foodDescription: 'BBQ Pork, peas, onion, sweetcorn, egg, rice'
					},
					{
						foodTitle: 'Chicken Fried Rice',
						foodPrice: 9.8,
						foodDescription: 'Chicken, peas, onion, sweetcorn, egg, rice'
					},
					{
						foodTitle: 'Combination Meats Fried Rice',
						foodPrice: 10.5,
						foodDescription:
							'Combination meat, peas, onion, sweetcorn, egg, rice'
					},
					{
						foodTitle: 'Pork Fried Rice',
						foodPrice: 9.8,
						foodDescription: 'Pork, peas, onion, sweetcorn, egg, rice'
					},
					{
						foodTitle: 'Prawn Fried Rice',
						foodPrice: 12.0,
						foodDescription: 'Prawn, peas, onion, sweetcorn, egg, rice'
					},
					{
						foodTitle: 'Steak Fried Rice',
						foodPrice: 10.0,
						foodDescription: 'Steak, peas, onion, sweetcorn, egg, rice'
					},
					{
						foodTitle: 'Plain Fried Rice',
						foodPrice: 7.5,
						foodDescription: 'Peas, onion, sweetcorn, egg, rice'
					}
				]
			},
			{
				category: 'Egg Foo Yoong Dishes',
				foodList: [
					{
						foodTitle: 'Plain Egg Foo Yoong',
						foodPrice: 8.0,
						foodDescription: 'Egg, peas, onion, sweetcorn'
					},
					{
						foodTitle: 'Chicken Egg Foo Yoong',
						foodPrice: 11.0,
						foodDescription: 'Chicken, egg, peas, onion, sweetcorn'
					},
					{
						foodTitle: 'BBQ Pork Egg Foo Yoong',
						foodPrice: 11.5,
						foodDescription: 'BBQ Pork, egg, peas, onion, sweetcorn'
					},
					{
						foodTitle: 'Pork Egg Foo Yoong',
						foodPrice: 11.0,
						foodDescription: 'Pork, egg, peas, onion, sweetcorn'
					},
					{
						foodTitle: 'Steak Plain Egg Foo Yoong',
						foodPrice: 11.5,
						foodDescription: 'Steak, egg, peas, onion, sweetcorn'
					},
					{
						foodTitle: 'Prawn Egg Foo Yoong',
						foodPrice: 13.5,
						foodDescription: 'Prawn, egg, peas, onion, sweetcorn'
					},
					{
						foodTitle: 'Combination Egg Foo Yoong',
						foodPrice: 11.5,
						foodDescription: 'Combination, egg, peas, onion, sweetcorn'
					}
				]
			},
			{
				category:
					'Special Dishes on White Rice or Noodles (on Fried Rice or Soft Noodles $2.00 extra)',
				foodList: [
					{
						foodTitle: 'Chicken & Vegies',
						foodPrice: 10.5,
						foodDescription: 'Chicken, broccoli, califlower, onion, carrot'
					},
					{
						foodTitle: 'Chicken Tomato & Vegies',
						foodPrice: 13.0,
						foodDescription:
							'Chicken, tomato, broccoli, califlower, onion, carrot'
					},
					{
						foodTitle: 'Chicken Cashew Nut & Vegies',
						foodPrice: 13.0,
						foodDescription:
							'Chicken, Cashew nut, broccoli, califlower, onion, carrot'
					},
					{
						foodTitle: 'Chicken Mushroom & Vegies',
						foodPrice: 13.0,
						foodDescription:
							'Chicken, mushroom, broccoli, califlower, onion, carrot'
					},
					{
						foodTitle: 'Chicken Pineapple & Vegies',
						foodPrice: 13.0,
						foodDescription:
							'Chicken, pineapple, broccoli, califlower, onion, carrot'
					},
					{
						foodTitle: 'BBQ Pork & Vegies',
						foodPrice: 11.2,
						foodDescription: 'BBQ Pork, broccoli, califlower, onion, carrot'
					},
					{
						foodTitle: 'BBQ Pork Tomato & Vegies',
						foodPrice: 12.5,
						foodDescription:
							'BBQ Pork, tomato, broccoli, califlower, onion, carrot'
					},
					{
						foodTitle: 'BBQ Pork Cashew Nut & Vegies',
						foodPrice: 15.0,
						foodDescription:
							'BBQ Pork, Cashew nut, broccoli, califlower, onion, carrot'
					},
					{
						foodTitle: 'BBQ Pork Mushroom & Vegies',
						foodPrice: 15.0,
						foodDescription:
							'BBQ Pork, mushroom, broccoli, califlower, onion, carrot'
					},
					{
						foodTitle: 'BBQ Pork Pineapple & Vegies',
						foodPrice: 15.0,
						foodDescription:
							'BBQ Pork, pineapple, broccoli, califlower, onion, carrot'
					},
					{
						foodTitle: 'Steak & Vegies',
						foodPrice: 10.7,
						foodDescription: 'Steak, broccoli, califlower, onion, carrot'
					},
					{
						foodTitle: 'Steak Tomato & Vegies',
						foodPrice: 14.0,
						foodDescription:
							'Steak, tomato, broccoli, califlower, onion, carrot'
					},
					{
						foodTitle: 'Steak Cashew Nut & Vegies',
						foodPrice: 14.0,
						foodDescription:
							'BBQ Pork, Cashew nut, broccoli, califlower, onion, carrot'
					},
					{
						foodTitle: 'Steak Mushroom & Vegies',
						foodPrice: 14.0,
						foodDescription:
							'Steak, mushroom, broccoli, califlower, onion, carrot'
					},
					{
						foodTitle: 'Steak Pineapple & Vegies',
						foodPrice: 14.0,
						foodDescription:
							'Steak, pineapple, broccoli, califlower, onion, carrot'
					},
					{
						foodTitle: 'Prawn & Vegies',
						foodPrice: 12.8,
						foodDescription: 'Prawn, broccoli, califlower, onion, carrot'
					},
					{
						foodTitle: 'Prawn Tomato & Vegies',
						foodPrice: 16.5,
						foodDescription:
							'Prawn, tomato, broccoli, califlower, onion, carrot'
					},
					{
						foodTitle: 'Prawn Cashew Nut & Vegies',
						foodPrice: 16.5,
						foodDescription:
							'Prawn, Cashew nut, broccoli, califlower, onion, carrot'
					},
					{
						foodTitle: 'Prawn Mushroom & Vegies',
						foodPrice: 16.5,
						foodDescription:
							'Prawn, mushroom, broccoli, califlower, onion, carrot'
					},
					{
						foodTitle: 'Prawn Pineapple & Vegies',
						foodPrice: 16.5,
						foodDescription:
							'Prawn, pineapple, broccoli, califlower, onion, carrot'
					}
				]
			},
			{
				category: 'Sweet & Sour Dishes',
				foodList: [
					{
						foodTitle: 'Sweet & Sour Fish',
						foodPrice: 11.0,
						foodDescription: 'Fish, carrot, onion, pineapple'
					},
					{
						foodTitle: 'Sweet & Sour Chicken',
						foodPrice: 11.0,
						foodDescription: 'Chicken, carrot, onion, pineapple'
					},
					{
						foodTitle: 'Sweet & Sour Won Tons',
						foodPrice: 10.0,
						foodDescription: 'Won tons, carrot, onion, pineapple'
					},
					{
						foodTitle: 'Sweet & Sour Pork',
						foodPrice: 11.0,
						foodDescription: 'Pork, carrot, onion, pineapple'
					}
				]
			},
			{
				category: 'Lemon & Honey Dishes',
				foodList: [
					{
						foodTitle: 'Lemon Chicken',
						foodPrice: 13.0,
						foodDescription: 'Lemon sauce, chicken'
					},
					{
						foodTitle: 'Honey Chicken',
						foodPrice: 13.0,
						foodDescription: 'Honey sauce, chicken'
					}
				]
			},
			{
				category: 'Indonesian Curry Dishes',
				foodList: [
					{
						foodTitle: 'Nasi Gorang',
						foodPrice: 12.0,
						foodDescription:
							'Combination meat, broccoli, califlower, carrot, peas, onion, sweetcorn, egg, rice'
					},
					{
						foodTitle: 'Bami Gorang',
						foodPrice: 12.0,
						foodDescription:
							'Combination meat, broccoli, califlower, carrot, peas, onion, sweetcorn, egg, soft noodles'
					}
				]
			},
			{
				category: 'Deep Fried',
				foodList: [
					{
						foodTitle: 'Fish',
						foodPrice: 2.5,
						foodDescription: 'Battered fish'
					},
					{
						foodTitle: 'Chips',
						foodPrice: 2.0,
						foodDescription: 'Potato'
					},
					{
						foodTitle: 'Hot Dog',
						foodPrice: 1.3,
						foodDescription: 'Battered hot dog'
					},
					{
						foodTitle: 'Spring Roll',
						foodPrice: 1.5,
						foodDescription: 'Chicken, cabbage, carrot, onion'
					},
					{
						foodTitle: 'Oyster',
						foodPrice: 2.0,
						foodDescription: 'Battered oyster'
					},
					{
						foodTitle: 'Scallop',
						foodPrice: 2.5,
						foodDescription: 'Battered scallop'
					},
					{
						foodTitle: 'Mussel',
						foodPrice: 1.0,
						foodDescription: 'Battered mussel'
					},
					{
						foodTitle: 'Sausage',
						foodPrice: 1.0,
						foodDescription: 'Mixed meat sausage'
					},
					{
						foodTitle: 'Donut',
						foodPrice: 1.0,
						foodDescription: 'Fried donut with sugar'
					},
					{
						foodTitle: 'Pineapple Fritter',
						foodPrice: 1.0,
						foodDescription: 'Battered pineapple with sugar'
					},
					{
						foodTitle: 'Potato Fritter',
						foodPrice: 0.8,
						foodDescription: 'Battered potato'
					},
					{
						foodTitle: 'Crab Stick',
						foodPrice: 1.2,
						foodDescription: 'Battered crab stick'
					},
					{
						foodTitle: 'Dozen Won Ton',
						foodPrice: 5.5,
						foodDescription: 'Pork won ton'
					},
					{
						foodTitle: 'Chicken Wings',
						foodPrice: 0.8,
						foodDescription: 'Battered Chicken wing'
					}
				]
			},
			{
				category: 'Chow Mein/Chop Suey Dishes',
				foodList: [
					{
						foodTitle: 'BBQ Pork Chow Mein',
						foodPrice: 10.5,
						foodDescription:
							'BBQ Pork, broccoli, califlower, onion, carrot, with a choice of crispy noodles'
					},
					{
						foodTitle: 'Chicken Chow Mein',
						foodPrice: 9.8,
						foodDescription:
							'Chicken, broccoli, califlower, onion, carrot, with a choice of crispy noodles'
					},
					{
						foodTitle: 'Combination Meats Chow Mein',
						foodPrice: 10.5,
						foodDescription:
							'Combination meat, broccoli, califlower, onion, carrot, with a choice of crispy noodles'
					},
					{
						foodTitle: 'Mushroom Chow Mein',
						foodPrice: 9.8,
						foodDescription:
							'Mushroom, broccoli, califlower, onion, carrot, with a choice of crispy noodles'
					},
					{
						foodTitle: 'Pork Chow Mein',
						foodPrice: 9.8,
						foodDescription:
							'Pork, broccoli, califlower, onion, carrot, with a choice of crispy noodles'
					},
					{
						foodTitle: 'Prawn Chow Mein',
						foodPrice: 12.0,
						foodDescription:
							'Prawn, broccoli, califlower, onion, carrot, with a choice of crispy noodles'
					},
					{
						foodTitle: 'Steak Chow Mein',
						foodPrice: 10.0,
						foodDescription:
							'Steak, broccoli, califlower, onion, carrot, with a choice of crispy noodles'
					},
					{
						foodTitle: 'Vegetable Chow Mein',
						foodPrice: 7.5,
						foodDescription:
							'Broccoli, califlower, onion, carrot, with a choice of crispy noodles'
					}
				]
			},

			{
				category:
					'Curry Dishes on White Rice or Noodles (on Fried Rice $2 extra)',
				foodList: [
					{
						foodTitle: 'Curry Chicken & Vegies',
						foodPrice: 10.8,
						foodDescription: 'Chicken, broccoli, califlower, onion, carrot'
					},
					{
						foodTitle: 'Curry Pork & Vegies',
						foodPrice: 10.8,
						foodDescription: 'Pork, broccoli, califlower, onion, carrot'
					},
					{
						foodTitle: 'Curry Steak & Vegies',
						foodPrice: 11.3,
						foodDescription: 'Steak, broccoli, califlower, onion, carrot'
					},
					{
						foodTitle: 'Curry BBQ Pork & Vegies',
						foodPrice: 11.3,
						foodDescription: 'BBQ Pork, broccoli, califlower, onion, carrot'
					},
					{
						foodTitle: 'Curry Combination & Vegies',
						foodPrice: 11.3,
						foodDescription:
							'Combination meat, broccoli, califlower, onion, carrot'
					},
					{
						foodTitle: 'Curry Prawns & Vegies',
						foodPrice: 11.3,
						foodDescription: 'Prawn, broccoli, califlower, onion, carrot'
					}
				]
			}
		]
	};
};

export default defaultMenuReducer;
