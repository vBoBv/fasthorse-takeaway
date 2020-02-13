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
		});
		if (itemArrayErrors.length) {
			errors.item = itemArrayErrors;
		}
	}
	return errors;
};

export default validate;
