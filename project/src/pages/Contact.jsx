import React from "react";
import { Card, Row, Col, Typography, Space } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

function Contact() {
  return (
    <div style={{ padding: "40px" }}>
      <Title level={2}>İletişim</Title>
      <Text>Bize aşağıdaki bilgilerden ulaşabilirsiniz.</Text>

      <Row gutter={[16, 16]} style={{ marginTop: "30px" }}>
        <Col xs={24} md={12}>
          <Card title="İletişim Bilgileri" bordered={false}>
            <Space direction="vertical" size="middle">
              <Text>
                <PhoneOutlined /> Telefon: <a href="tel:+905551112233"> (0312) 278 32 32</a>
              </Text>
              <Text>
                <MailOutlined /> E-posta: <a href="mailto:info@example.com">info@example.com</a>
              </Text>
              <Text>
                <EnvironmentOutlined /> Adres: Şaşmaz Oto Sanayi Sitesi, Bahçekapı, 2464. Sk. No:2, 06990 Etimesgut/Ankara
              </Text>
            </Space>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card title="Konumumuz" bordered={false}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6117.86408947784!2d32.70779301167816!3d39.94290968422246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d337e4460276f5%3A0xc899f955c5d1c836!2sUZMAN%20LLC!5e0!3m2!1str!2str!4v1751722400239!5m2!1str!2str" 
            width="100%" 
            height="250" 
            style={{ border: 0 }} 
            allowfullscreen=""
             loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"></iframe>

            {/* <iframe 
              title="Konum"
              src="https://g.co/kgs/GyysfjH"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe> */}
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
