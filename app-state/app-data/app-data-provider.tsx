import { ReactNode, useReducer } from "react";
import appDataReducer from "./app-data-reducer";
import AppData from "@/lib/interfaces/business/app-data";
import AppDataContext from "./app-data-context";

const AppDataProvider = ({
  appData,
  children,
}: {
  appData: AppData;
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(appDataReducer, {
    data: appData,
  });

  const setAppData = async (data: AppData): Promise<void> => {
    dispatch({
      type: "SET_APP_DATA",
      payload: {
        data,
      },
    });
  };

  return (
    <AppDataContext.Provider
      value={{
        setAppData,
        data: state.data,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};

export default AppDataProvider;
