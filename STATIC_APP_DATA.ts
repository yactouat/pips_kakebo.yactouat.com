import AppData from "./lib/interfaces/business/app-data";

// we use this variable while apps configuration is not dynamic
const STATIC_APP_DATA: AppData = {
  description: process.env.APP_DESCRIPTION ?? "",
  landingImages: {
    hero: {
      alt: "A money vault",
      src: `https://cdn.jsdelivr.net/gh/yactouat/pips_theme_${
        process.env.APP_THEME ?? ""
      }@master/images/money_vault.jpg`,
    },
  },
  legalInfo: {
    city: "Strasbourg",
    country: "France",
    email: "yacine.touati.pro@gmail.com",
    name: process.env.APP_TITLE ?? "",
    postalCode: "67000",
  },
  mainHeadingHighlightedExpression: "for real",
  mainHeadingText: "Save money for real this time...",
  navLinks: [],
  mainHeadingSubText1:
    "Tired of watching your money melt away?",
  mainHeadingSubText2:
    "This virtual kakebo will help you improve the money side of your life !",
  theme: process.env.APP_THEME ?? "",
  themeColor: process.env.APP_THEME_COLOR ?? "",
  title: process.env.APP_TITLE ?? "",
  url: process.env.APP_URL ?? "",
};

export default STATIC_APP_DATA;
