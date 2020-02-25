import axios from 'axios';
import {
	FETCH_USER,
	FETCH_MENU,
	FETCH_MENUS,
	CREATE_MENU,
	EDIT_MENU,
	DELETE_MENU
} from './types';
import history from '../history';

export const fetchUser = () => async (dispatch) => {
	const res = await axios.get('/api/current_user');

	dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitMenu = (values) => async (dispatch) => {
	const res = await axios.post('/api/menus', values);

	dispatch({ type: CREATE_MENU, payload: res.data });

	history.push('/menus/list');
};

export const fetchMenus = () => async (dispatch) => {
	const res = await axios.get('/api/menus');

	dispatch({ type: FETCH_MENUS, payload: res.data });
};

export const fetchMenu = (_id) => async (dispatch) => {
	const res = await axios.get(`/api/menus/${_id}`);

	dispatch({ type: FETCH_MENU, payload: res.data });
};

export const editMenu = (id, values) => async (dispatch) => {
	const res = await axios.patch(`/api/menus/${id}`, values);

	dispatch({ type: EDIT_MENU, payload: res.data });
	history.push('/menus/list');
};

export const deleteMenu = (id) => async (dispatch) => {
	await axios.delete(`/api/menus/${id}`);

	dispatch({ type: DELETE_MENU, payload: id });
	history.push('/menus/list');
};
