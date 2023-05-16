import Head from "next/head";
import { useContext, useEffect } from "react";

import AppDataContext from "@/app-state/app-data/app-data-context";
import AppSection from "@/components/app-section/app-section";
import MainLayout from "@/components/main-layout/main-layout";
import UserProfileContext from "@/app-state/user-profile/user-profile-context";

const SoMonthWrapped = () => {
  const { data, setAppData } = useContext(AppDataContext);
  const { autoSignIn, userProfile } = useContext(UserProfileContext);

  useEffect(() => {
    autoSignIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data) return <p>... loading</p>;

  // TODO send user to login page if not logged in then redirect back to this page

  return (
    <MainLayout page="home" themeColor={data.themeColor}>
      <Head>
        <title>{data!.title} | Start of the month</title>
        {/* scripts that need to be loaded ASAP should go here */}
        <meta name="robots" content="noindex" />
      </Head>
        <AppSection id="so-month" title="Start of the month" >
            <p>I'm SO Month screen</p>
        </AppSection>
    </MainLayout>
  );
};

export default SoMonthWrapped;
