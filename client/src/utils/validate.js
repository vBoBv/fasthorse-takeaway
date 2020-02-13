import validatePrice from './validatePrice';

const validate = (values) => {
	const errors = {};

	if (!values.item || !values.item.length) {
		errors.item = { _error: 'At least one category of food must be entered' };
	} else {
		const itemArrayErrors = [];
		values.item.forEach((item, itemIndex) => {
			const itemErrors = {};
			if (!item || !item.category) {
				itemErrors.category = 'Required';
				itemArrayErrors[itemIndex] = itemErrors;
			}
			if (item && item.foodList && item.foodList.length) {
				const foodListArrayErrors = [];
				item.foodList.forEach((food, foodIndex) => {
					const foodErrors = {};
					if (!food || !food.foodTitle) {
						foodErrors.foodTitle = 'Required';
						foodListArrayErrors[foodIndex] = foodErrors;
					}
					if (food || food.foodPrice) {
						foodErrors.foodPrice = validatePrice(food.foodPrice);
						foodListArrayErrors[foodIndex] = foodErrors;
					}
					foodErrors.foodPrice = validatePrice(food.foodPrice);
					if (!food || !food.foodPrice) {
						foodErrors.foodPrice = 'Required';
						foodListArrayErrors[foodIndex] = foodErrors;
					}
					if (!food || !food.foodDescription) {
						foodErrors.foodDescription = 'Required';
						foodListArrayErrors[foodIndex] = foodErrors;
					}
				});

				if (foodListArrayErrors.length) {
					itemErrors.foodList = foodListArrayErrors;
					itemArrayErrors[itemIndex] = itemErrors;
				}
			}
		});
		if (itemArrayErrors.length) {
			errors.item = itemArrayErrors;
		}
	}
	return errors;
};

export default validate;
