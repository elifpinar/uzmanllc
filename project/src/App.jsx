import React, { Suspense, lazy } from "react";
import { Layout, ConfigProvider, theme as antdTheme, Spin } from "antd";
import HeaderBar from "./components/HeaderBar";
import FooterBar from "./components/FooterBar";
import { Routes, Route } from "react-router-dom";

const { Content } = Layout;

// Lazy yüklenen sayfa bileşenleri
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

const App = () => {
  return (
    <ConfigProvider
      theme={{
        algorithm: antdTheme.defaultAlgorithm,
        token: {
          colorPrimary: "#03224e",
          colorSuccess: "#ED4192",
          colorWarning: "#ffc107",
          colorError: "#dc3545",
          borderRadius: 8,
          fontSize: 16,
          controlHeight: 60,
        },
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <HeaderBar />
        <Content style={{ padding: "0rem" }}>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "80vh",
                }}
              >
                <Spin size="small"  />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </Content>
        <FooterBar />
      </Layout>
    </ConfigProvider>
  );
};
export default App;
