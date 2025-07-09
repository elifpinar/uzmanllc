import React from "react";
import { Typography, Row, Col, Card } from "antd";
import { useTranslation } from "react-i18next";

const { Title, Paragraph } = Typography;

function About() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: "2rem", backgroundColor: "#F0ECE5", minHeight: "auto" }}>
      <Title level={2} style={{ color: "#9f1c21" }}>{t("about_us_title")}</Title>

      <Paragraph style={{ fontSize: "18px", fontWeight: "400", color: "#616161", whiteSpace: "pre-line" }}>
        {t("about_us_paragraph")}
      </Paragraph>

      <Row gutter={[24, 24]} style={{ marginTop: "30px" }}>
        <Col xs={24} md={12}>
          <Card 
            title={<span style={{ color: "#9f1c21" }}>{t("vision")}</span>} 
            bordered={false}
          >
            <Paragraph style={{ color: "#616161" }}>
              {t("vision_text")}
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card 
            title={<span style={{ color: "#9f1c21" }}>{t("mission")}</span>} 
            bordered={false}
          >
            <Paragraph style={{ color: "#616161" }}>
              {t("mission_text")}
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24}>
          <Card 
            title={<span style={{ color: "#9f1c21" }}>{t("team")}</span>} 
            bordered={false}
          >
            <Paragraph style={{ color: "#616161" }}>
              {t("team_text1")}
            </Paragraph>
            <Paragraph style={{ color: "#616161" }}>
              {t("team_text2")}
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default About;
