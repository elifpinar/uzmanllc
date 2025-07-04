import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;
const FooterBar = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      © {new Date().getFullYear()} Tüm Hakları Saklıdır.
    </Footer>
  );
};

export default FooterBar;
