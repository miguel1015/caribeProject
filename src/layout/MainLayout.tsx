import React, { useState } from "react";
import { Layout, Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import ThemeToggle from "../components/ThemeToggle";
import { primaryYellow } from "../theme/themeConfig";

const { Header, Content, Footer } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
  isDarkMode: boolean;
  toggleTheme: () => void;
  currentPath: string;
  setPath: (path: string) => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  isDarkMode,
  toggleTheme,
  currentPath,
  setPath,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { key: "home", label: "Inicio" },
    { key: "about", label: "Nosotros" },
    {
      key: "services",
      label: "Servicios",
      children: [
        { key: "residential", label: "Residencial" },
        { key: "commercial", label: "Comercial" },
        { key: "industrial", label: "Industrial" },
      ],
    },
    { key: "contact", label: "Contacto" },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        className="glass-header"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          background: isDarkMode ? "#000000" : "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <div
            style={{
              fontSize: "24px",
              fontWeight: 800,
              color: primaryYellow,
              letterSpacing: "-1px",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={() => setPath("home")}
          >
            CONSTRUC
            <span style={{ color: isDarkMode ? "#fff" : "#000" }}>CARIBE</span>
          </div>

          <Menu
            mode="horizontal"
            items={menuItems}
            selectedKeys={[currentPath]}
            onClick={({ key }) => setPath(key)}
            style={{
              minWidth: 400,
              borderBottom: "none",
              display: "none", // Hidden on mobile
            }}
            className="desktop-menu"
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <Button
            className="mobile-menu-btn"
            type="text"
            icon={
              <MenuOutlined style={{ color: isDarkMode ? "#fff" : "#000" }} />
            }
            onClick={() => setMobileMenuOpen(true)}
            style={{ display: "none" }} // Controlled by CSS
          />
        </div>

        <Drawer
          title="Menú"
          placement="right"
          onClose={() => setMobileMenuOpen(false)}
          open={mobileMenuOpen}
          styles={{
            body: { padding: 0 },
            header: {
              background: isDarkMode ? "#000" : "#fff",
              color: isDarkMode ? "#fff" : "#000",
            },
          }}
        >
          <Menu
            mode="inline"
            items={menuItems}
            selectedKeys={[currentPath]}
            style={{ borderRight: "none" }}
            onClick={({ key }) => {
              setPath(key);
              setMobileMenuOpen(false);
            }}
          />
        </Drawer>
      </Header>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media (min-width: 768px) {
          .desktop-menu { display: block !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-menu { display: none !important; }
          .mobile-menu-btn { display: flex !important; align-items: center; justify-content: center; }
        }
      `,
        }}
      />

      <Content>{children}</Content>

      <Footer
        style={{
          textAlign: "center",
          background: isDarkMode ? "#000" : "#f0f2f5",
          color: isDarkMode ? "#888" : "#666",
        }}
      >
        Caribe Proyect ©{new Date().getFullYear()} - Construcción de Vanguardia
      </Footer>
    </Layout>
  );
};

export default MainLayout;
