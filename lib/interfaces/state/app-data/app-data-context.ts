import AppData from "../../business/app-data";

interface AppDataContext {
  setAppData: (data: AppData) => Promise<void>;
  data: AppData | null;
}

export default AppDataContext;
