import _ from 'lodash';
import {
	FETCH_MENUS,
	FETCH_MENU,
	CREATE_MENU,
	EDIT_MENU,
	DELETE_MENU
} from '../actions/types';

// export default (state = [], action) => {
// 	switch (action.type) {
// 		case CREATE_MENU:
// 			return action.payload;
// 		case FETCH_MENUS:
// 			return action.payload;
// 		default:
// 			return state;
// 	}
// };

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_MENUS:
			return { ...state, ..._.mapKeys(action.payload, '_id') };
		case FETCH_MENU:
			return { ...state, [action.payload._id]: action.payload };
		case CREATE_MENU:
			return { ...state, [action.payload._id]: action.payload };
		case EDIT_MENU:
			return { ...state, [action.payload._id]: action.payload };
		case DELETE_MENU:
			return _.omit(state, action.payload);
		default:
			return state;
	}
};
