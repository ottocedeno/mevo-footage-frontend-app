import { combineReducers } from "redux";
import manageCategories from "./manageCategories";
import manageCameras from "./manageCameras";

const rootReducer = combineReducers({
  categories: manageCategories,
  cameras: manageCameras,
});

export default rootReducer;
