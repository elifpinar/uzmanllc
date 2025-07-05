import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;
const FooterBar = () => {
  return (
    <Footer style={{ textAlign: "center",backgroundColor: "#F0ECE5" }} >
      © {new Date().getFullYear()} Tüm Hakları Saklıdır.
    </Footer>
  );
};

export default FooterBar;
