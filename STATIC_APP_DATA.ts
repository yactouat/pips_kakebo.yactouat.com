import AppData from "./lib/interfaces/business/app-data";

// we use this variable while apps configuration is not dynamic
const STATIC_APP_DATA: AppData = {
  description: process.env.APP_DESCRIPTION ?? "",
  landingImages: {
    hero: {
      alt: "A military command center",
      src: `https://cdn.jsdelivr.net/gh/yactouat/pips_theme_${
        process.env.APP_THEME ?? ""
      }@master/images/pips_command_center.jpg`,
    },
  },
  legalInfo: {
    city: "Strasbourg",
    country: "France",
    email: "yacine.touati.pro@gmail.com",
    name: process.env.APP_TITLE ?? "",
    postalCode: "67000",
  },
  mainHeadingHighlightedExpression: "Control",
  mainHeadingText: "Control all your digital life from one place...",
  navLinks: [],
  mainHeadingSubText1:
    "Tired of switching between apps to manage your online presence and accounts?",
  mainHeadingSubText2:
    "The PIPS (Portable Integrated Personal System) will integrate your life !",
  theme: process.env.APP_THEME ?? "",
  themeColor: process.env.APP_THEME_COLOR ?? "",
  title: process.env.APP_TITLE ?? "",
  url: process.env.APP_URL ?? "",
};

export default STATIC_APP_DATA;
