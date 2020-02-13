const initialFormReducer = () => {
	return {
		item: [
			{
				category: '',
				foodList: [
					{
						foodTitle: '',
						foodPrice: '',
						foodDescription: ''
					}
				]
			}
		]
	};
};

export default initialFormReducer;
