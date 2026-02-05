import React from "react";
import { Button } from "antd";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  isDarkMode,
  toggleTheme,
}) => {
  return (
    <Button
      type="text"
      icon={isDarkMode ? <Sun size={20} color="#facd00" /> : <Moon size={20} />}
      onClick={toggleTheme}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        width: 40,
        height: 40,
      }}
    />
  );
};

export default ThemeToggle;
