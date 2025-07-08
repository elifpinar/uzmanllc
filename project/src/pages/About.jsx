import React from "react";
import { Typography, Row, Col, Card } from "antd";

const { Title, Paragraph } = Typography;

function About() {
  return (
    <div style={{ padding: "2rem", backgroundColor: "#F0ECE5", minHeight: "auto" }}>
      <Title level={2} style={{ color: "#9f1c21" }}>Hakkımızda</Title>

      <Paragraph style={{ fontSize: "18px", fontWeight: "400", color: "#616161" }}>
        1980’lerde başlayan öğrenme tutkumuzu, 30 yılı aşkın tarım deneyimimizle birleştirerek Uzman LLC çatısı altında faaliyetlerimizi sürdürüyoruz. Kuruluşumuzdan bu yana, farklı sektörlerde uzmanlaşmış çok sayıda alt firmamızla birlikte büyümeye ve gelişmeye devam ediyoruz.
        <br /><br />
        “Bilgi Çağı” olarak adlandırılan bu dönemde teknolojinin işletmeler üzerindeki dönüştürücü etkisini yakından takip ediyor; otuz yılı aşan saha tecrübemizi, en güncel teknolojik altyapılarla harmanlayarak müşterilerimize yüksek katma değerli hizmetler sunuyoruz.
        <br /><br />
        Müşteri memnuniyetini merkeze alan hizmet anlayışımızla, yalnızca ürün ve çözüm sunmakla kalmıyor; satış sonrası destek süreçlerimizi sürekli geliştirerek kalıcı memnuniyet sağlamayı hedefliyoruz.
      </Paragraph>

      <Row gutter={[24, 24]} style={{ marginTop: "30px" }}>
        <Col xs={24} md={12}>
          <Card 
            title={<span style={{ color: "#9f1c21" }}>Vizyonumuz</span>} 
            bordered={false}
          >
            <Paragraph style={{ color: "#616161" }}>
              Teknoloji ve deneyimi bir araya getirerek, farklı sektörlerde faaliyet gösteren alt şirketlerimizle birlikte global ölçekte güvenilir ve sürdürülebilir çözümler sunan lider bir grup şirketi olmak.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card 
            title={<span style={{ color: "#9f1c21" }}>Misyonumuz</span>} 
            bordered={false}
          >
            <Paragraph style={{ color: "#616161" }}>
              Müşterilerimizin ihtiyaçlarını en doğru şekilde analiz ederek, çağın gereksinimlerine uygun, yenilikçi ve sürdürülebilir hizmetler sunmak.
              <br /><br />
              Alanında uzman alt firmalarımızla sinerji yaratarak, çok sektörlü çözümler üretmek.
              <br /><br />
              Satış sonrası hizmetlerde kalite standartlarını yükselterek müşteri memnuniyetini en üst düzeye çıkarmak.
              <br /><br />
              Teknolojiyle bütünleşmiş bir iş modeliyle, topluma ve çevreye değer katmak.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24}>
          <Card 
            title={<span style={{ color: "#9f1c21" }}>Ekibimiz</span>} 
            bordered={false}
          >
            <Paragraph style={{ color: "#616161" }}>
              Uzman LLC ailesi, her biri kendi alanında uzman mühendislerden, saha çalışanlarından, Ar-Ge uzmanlarından ve yöneticilerden oluşan güçlü bir kadroya sahiptir. Ekibimizin temel gücü; uzun yıllara dayanan bilgi birikimi, öğrenmeye olan tutkusu ve değişime olan açıklığıdır.
            </Paragraph>
            <Paragraph style={{ color: "#616161" }}>
              Alt şirketlerimizde görev alan ekiplerimizle birlikte, sektörel farklılıkları bir zenginlik olarak görüyor, disiplinler arası bir iş birliği anlayışıyla hareket ediyoruz.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default About;
