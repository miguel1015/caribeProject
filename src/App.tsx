import React, { useState, useEffect } from "react";
import { ConfigProvider } from "antd";
import { getThemeConfig } from "./theme/themeConfig";
import About from "./pages/About";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ConfigProvider theme={getThemeConfig(isDarkMode)}>
      <MainLayout
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        currentPath={currentPath}
        setPath={setCurrentPath}
      >
        {currentPath === "home" ? <Home /> : <About />}
      </MainLayout>
    </ConfigProvider>
  );
};

export default App;
