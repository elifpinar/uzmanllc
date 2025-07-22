import React, { useState, useMemo } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import {
  MenuOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Grid } from "antd";
import { useTranslation } from "react-i18next";

const { Header } = Layout;
const { useBreakpoint } = Grid;

const HeaderBar = () => {
  const navigate = useNavigate();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const screens = useBreakpoint();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "tr" ? "en" : "tr";
    i18n.changeLanguage(newLang);
  };

  const menuItems = useMemo(
    () => [
      {
        key: "1",
        label: <span>{t("about")}</span>,
        onClick: () => {
          navigate("/about");
          setDrawerVisible(false);
        },
      },
      {
        key: "2",
        label: <span>{t("contact")}</span>,
        onClick: () => {
          navigate("/contact");
          setDrawerVisible(false);
        },
      },
    ],
    [t, navigate]
  );

  return (
    <>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          height: 100,
          backgroundColor: "#F0ECE5",
        }}
      >
        {/* Sol boşluk veya dil butonu (mobilde üstte olsun diye önce koyduk) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            zIndex: 2,

          }}
        >
          <Button onClick={toggleLanguage} size="small" type="text">
            {i18n.language === "tr" ? "EN" : "TR"}
          </Button>
        </div>

        {/* Orta: Logo */}
        <div
          style={{
            position: "absolute",         // Eklenen satır
            left: "50%",                  // Eklenen satır
            transform: "translateX(-50%)",// Eklenen satır
            top: 0,                       // Eklenen satır
            bottom: 0,                    // Eklenen satır
            flex: 1,
            display: "flex",
            justifyContent: "center",
            //alignItems: "center",
            cursor: "pointer",
            zIndex: 0,
            //overflow: "hidden",
            //pointerEvents: "auto",
            //flexGrow:1,
          }}
          onClick={() => navigate("/")}
        >
          <img
            src="logos/uzmanllclogo.webp"
            loading="lazy"
            alt="Logo"
            style={{
              maxHeight: "100px",
              width: "auto",
              maxWidth: "200%",
              objectFit: "contain",
               transform: "scale(1.3)", // 💡 logo görsel olarak büyür
    transformOrigin: "center", // ortalanarak büyüsün
            }}
          />
        </div>

        {/* Sağ: Menü ya da mobil buton */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "16px",
            zIndex: 2,
          }}
        >
          {!screens.md ? (
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setDrawerVisible(true)}
              style={{ fontSize: "24px" }}
            />
          ) : (
            <>
              <Button 
              type="text" 
              className ="custom-button" 
              onClick={() => navigate("/about")}>
                {t("about")}
              </Button>
              
              <Button type="text" onClick={() => navigate("/contact")}>
                {t("contact")}
              </Button>
            </>
          )}
        </div>
      </Header>

      {/* Mobil Drawer Menüsü */}
      <Drawer
        title=""
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        bodyStyle={{ backgroundColor: "#F0ECE5", padding: 0 }}
        headerStyle={{ backgroundColor: "#F0ECE5" }}
      >
        <Menu
          mode="vertical"
          items={menuItems}
          style={{ backgroundColor: "#F0ECE5", borderRight: "none" }}
        />
      </Drawer>
    </>
  );
};

export default HeaderBar;
