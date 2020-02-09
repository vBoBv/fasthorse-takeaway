import { combineReducers } from "redux";
import authReducer from "./authReducer";
import menuReducer from "./menuReducer";
import defaultMenuReducer from "./defaultMenuReducer";
import { reducer as reduxForm } from "redux-form";

export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    menu: menuReducer,
    defaultMenu: defaultMenuReducer
});
