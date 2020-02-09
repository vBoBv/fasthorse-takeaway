import axios from "axios";
import { FETCH_USER, FETCH_MENU, FETCH_MENUS } from "./types";
import history from "../history";

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get("/api/current_user");
    // console.log(res);
    // dispatch({ type: FETCH_USER, payload: res });
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitMenu = (values) => async (dispatch) => {
    const res = await axios.post("/api/menus", values);

    dispatch({ type: FETCH_MENU, payload: res.data });
    history.push("/menus/list");
};

export const fetchMenus = () => async (dispatch) => {
    const res = await axios.get("/api/menus");

    dispatch({ type: FETCH_MENUS, payload: res.data });
};
