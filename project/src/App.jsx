import React from "react";
import { Layout, ConfigProvider, theme as antdTheme } from "antd";
import HeaderBar from "./components/HeaderBar";
import FooterBar from "./components/FooterBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes, Route } from 'react-router-dom';

const { Content } = Layout; 

const App = () => {
  return (
    
<ConfigProvider
  theme={{
  algorithm: antdTheme.defaultAlgorithm,  
  token: {
    colorPrimary: "#03224e", // açık mavi (bootstrap'tan esinlenilmiş)
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
    <Content style={{ padding: "2rem" }}>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
      
    </Content>
    <FooterBar />
  </Layout>
</ConfigProvider>
  );
};

export default App;
