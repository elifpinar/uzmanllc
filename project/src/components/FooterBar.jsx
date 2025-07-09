import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;


import { useTranslation } from 'react-i18next';

const FooterBar = () => {
   const { t } = useTranslation();
  return (
    <Footer style={{ textAlign: "center",backgroundColor: "#F0ECE5" }} >
      © {new Date().getFullYear()}  {t('footer')}
    </Footer>
  );
};

export default FooterBar;
