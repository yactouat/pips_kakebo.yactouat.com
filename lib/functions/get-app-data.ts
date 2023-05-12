import AppData from "../interfaces/business/app-data";
import STATIC_APP_DATA from "@/STATIC_APP_DATA";

const getAppData = (): {
  props: {
    appData: AppData;
  };
} => {
  if (
    !process.env.APP_THEME ||
    !process.env.APP_TITLE ||
    !process.env.APP_THEME_COLOR ||
    !process.env.APP_DESCRIPTION ||
    !process.env.APP_URL
  ) {
    throw new Error("all env vars must be set");
  }
  return {
    props: {
      appData: STATIC_APP_DATA,
    },
  };
};

export default getAppData;
