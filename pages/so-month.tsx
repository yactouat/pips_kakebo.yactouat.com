import AppData from "@/lib/interfaces/business/app-data";
import AppDataProvider from "@/app-state/app-data/app-data-provider";
import getAppData from "@/lib/functions/get-app-data";
import UserProfileProvider from "@/app-state/user-profile/user-profile-provider";
import SoMonthWrapped from "@/page-wrappers/so-month-wrapped";

export async function getStaticProps() {
  return getAppData();
}

export default function Landing({ appData }: { appData: AppData }) {
  // passing the app data to the AppDataProvider at this stage to avoid hydration errors
  return (
    <AppDataProvider appData={appData}>
      <UserProfileProvider>
        <SoMonthWrapped />
      </UserProfileProvider>
    </AppDataProvider>
  );
}
