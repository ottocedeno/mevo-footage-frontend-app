import { combineReducers } from "redux";
import manageCategories from "./manageCategories";
import manageCameras from "./manageCameras";
import manageVideos from "./manageVideos";

const rootReducer = combineReducers({
  categories: manageCategories,
  cameras: manageCameras,
  videos: manageVideos,
});

export default rootReducer;
