import React, { useState } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import {
  MenuOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Grid } from "antd";

const { Header } = Layout;
const { useBreakpoint } = Grid;

const HeaderBar = () => {
  const navigate = useNavigate();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const screens = useBreakpoint();

  const menuItems = [
    {
      key: "1",
      icon: <InfoCircleOutlined />,
      label: "Hakkımızda",
      onClick: () => {
        navigate("/about");
        setDrawerVisible(false);
      },
    },
    {
      key: "2",
      icon: <PhoneOutlined />,
      label: "İletişim",
      onClick: () => {
        navigate("/contact");
        setDrawerVisible(false);
      },
    },
  ];

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
          height: 120,
          backgroundColor: "#F0ECE5",
        }}
      >
        {/* Sol alan: boş, ama flex:1 */}
        <div style={{ flex: 1 }}></div>

        {/* Orta: Logo */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          <img
            src="logos/uzmanllclogo.png"
            alt="Logo"
            style={{
              
              maxHeight: "200px",
              width: "auto",
              maxWidth:"200%", // mobildeki sağdaki beyaz boşluğu engellemek için 
              objectFit: "contain",
            }}
          />
        </div>

        {/* Sağ alan: mobilde menü butonu, büyük ekranda menü */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {!screens.md && (
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setDrawerVisible(true)}
              style={{ fontSize: "24px" }}
            />
          )}
          {screens.md && (
            <Menu mode="horizontal" theme="#fffac3" items={menuItems} />
          )}
        </div>
      </Header>

      {/* Mobilde çekmece menü */}
      <Drawer
        title="Menü"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
      >
        <Menu mode="vertical" items={menuItems} theme="#fffac3" />
      </Drawer>
    </>
  );
};

export default HeaderBar;
