import React from "react";
import { Card, Row, Col, Typography, Space } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: "2rem", backgroundColor: "#F0ECE5" }}>
      <Title level={2} style={{ color: "#9f1c21" }}>{t('contact_title')}</Title>
      <Text style={{ color: "#616161" }}>{t('contact_subtitle')}</Text>

      <Row gutter={[16, 16]} style={{ marginTop: "30px" }}>
        <Col xs={24}>
          <Card title={<span style={{ color: "#9f1c21" }}>{t('contact_info_title')}</span>} bordered={false}>
            <Space direction="vertical" size="middle">
              <Text style={{ color: "#616161" }}>
                <PhoneOutlined /> {t('phone')}: <a href="tel:+905551112233" style={{ color: "#616161" }}> (0312) 278 32 32</a>
              </Text>
              <Text style={{ color: "#616161" }}>
                <MailOutlined /> {t('email')}: <a href="mailto:info@uzmanllc.com" style={{ color: "#616161" }}>info@uzmanllc.com</a>
              </Text>
              <Text style={{ color: "#616161" }}>
                <EnvironmentOutlined /> {t('address_1')}
              </Text>
              <Text style={{ color: "#616161" }}>
                <EnvironmentOutlined /> {t('address_2')}
              </Text>
            </Space>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card title={<span style={{ color: "#9f1c21" }}>{t('location_title')}</span>} bordered={false}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6117.86408947784!2d32.70779301167816!3d39.94290968422246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d337e4460276f5%3A0xc899f955c5d1c836!2sUZMAN%20LLC!5e0!3m2!1str!2str!4v1751722400239!5m2!1str!2str"
              width="100%"
               height="250"
               style={{ border: 0 }}
             allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Konumumuz"
            ></iframe>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card title={<span style={{ color: "#9f1c21" }}>{t('factory_location_title')}</span>} bordered={false}>
             <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191.57511062987774!2d32.40542630635529!3d39.80246565044753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d31dd4b1104b03%3A0xdd39756f18f0a0f9!2sMal%C4%B1k%C3%B6y%20Anadolu%20OSB%2C%20Dumlup%C4%B1nar%20Cd.%20No%3A18%2C%2006909%20Sincan%2FAnkara!5e0!3m2!1str!2str!4v1751958008668!5m2!1str!2str"
             width="100%"
             height="250"
             style={{ border: 0 }}
             allowFullScreen=""
             loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Malıköy Fabrika"
            ></iframe>
          </Card>
        </Col>
      </Row>
    </div>
  );
}


  

// function Contact() {
//   return (
//     <div style={{ padding: "2rem", backgroundColor: "#F0ECE5" }}>
//       <Title level={2} style={{ color: "#9f1c21" }}>İletişim</Title>
//       <Text style={{ color: "#616161" }}>Bize aşağıdaki bilgilerden ulaşabilirsiniz.</Text>

//       <Row gutter={[16, 16]} style={{ marginTop: "30px" }}>
//         <Col xs={24}>
//           <Card title={<span style={{ color: "#9f1c21" }}>İletişim Bilgileri</span>} bordered={false}>
//             <Space direction="vertical" size="middle">
//               <Text style={{ color: "#616161" }}>
//                 <PhoneOutlined /> Telefon: <a href="tel:+905551112233" style={{ color: "#616161" }}> (0312) 278 32 32</a>
//               </Text>
//               <Text style={{ color: "#616161" }}>
//                 <MailOutlined /> E-posta: <a href="mailto:info@example.com" style={{ color: "#616161" }}>info@example.com</a>
//               </Text>
//               <Text style={{ color: "#616161" }}>
//                 <EnvironmentOutlined /> Adres: Şaşmaz Oto Sanayi Sitesi, Bahçekapı, 2464. Sk. No:2, 06990 Etimesgut/Ankara
//               </Text>
//               <Text style={{ color: "#616161" }}>
//                 <EnvironmentOutlined /> Adres: Malıköy anadolu osb mah. Dumlupınar cad.  No:18, 100541 Ankara/Sincan
//               </Text>
//             </Space>
//           </Card>
//         </Col>

//         <Col xs={24} md={12}>
//           <Card title={<span style={{ color: "#9f1c21" }}>Konumumuz</span>} bordered={false}>
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6117.86408947784!2d32.70779301167816!3d39.94290968422246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d337e4460276f5%3A0xc899f955c5d1c836!2sUZMAN%20LLC!5e0!3m2!1str!2str!4v1751722400239!5m2!1str!2str"
//               width="100%"
//               height="250"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Konumumuz"
//             ></iframe>
//           </Card>
//         </Col>

//         <Col xs={24} md={12}>
//           <Card title={<span style={{ color: "#9f1c21" }}>Malıköy Fabrika Konumumuz</span>} bordered={false}>
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191.57511062987774!2d32.40542630635529!3d39.80246565044753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d31dd4b1104b03%3A0xdd39756f18f0a0f9!2sMal%C4%B1k%C3%B6y%20Anadolu%20OSB%2C%20Dumlup%C4%B1nar%20Cd.%20No%3A18%2C%2006909%20Sincan%2FAnkara!5e0!3m2!1str!2str!4v1751958008668!5m2!1str!2str"
//               width="100%"
//               height="250"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Malıköy Fabrika"
//             ></iframe>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// }

export default Contact;
