import { theme, type ThemeConfig } from "antd";

export const primaryYellow = "#facd00";
export const deepBlack = "#000000";

export const getThemeConfig = (isDarkMode: boolean): ThemeConfig => ({
  algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
  token: {
    colorPrimary: primaryYellow,
    colorInfo: primaryYellow,
    borderRadius: 8,
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  },
  components: {
    Layout: {
      headerBg: isDarkMode ? deepBlack : "#ffffff",
      bodyBg: isDarkMode ? "#141414" : "#f4fbf8",
    },
    Menu: {
      itemBg: "transparent",
      itemColor: isDarkMode ? "#ffffff" : deepBlack,
      itemSelectedColor: primaryYellow,
      itemHoverColor: primaryYellow,
    },
    Button: {
      colorPrimary: primaryYellow,
      colorPrimaryHover: "#e6b800",
    },
  },
});
