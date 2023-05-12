import AppData from "../../business/app-data";

interface AppDataAction {
  payload?: {
    data: AppData | null;
  };
  type: "SET_APP_DATA";
}

export default AppDataAction;
