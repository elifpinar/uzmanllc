import React from "react";
import { Typography, Row, Col, Card } from "antd";

const { Title, Paragraph } = Typography;

function About() {
  return (
    <div style={{ padding: "2rem", backgroundColor: "#F0ECE5", minHeight: "auto" }}>
      <Title level={2}>Hakkımızda</Title>

      <Paragraph type="secondary">
        Biz, yenilikçi teknolojilerle fark yaratan bir ekibiz. Misyonumuz; kullanıcı dostu, sürdürülebilir ve yüksek performanslı çözümler üretmektir.
      </Paragraph>

      <Row gutter={[24, 24]} style={{ marginTop: "30px" }}>
        <Col xs={24} md={12}>
          <Card title="Vizyonumuz" bordered={false}>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac elementum purus, at laoreet enim. Nullam eu magna facilisis, blandit sapien nec, porta nibh.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Misyonumuz" bordered={false}>
            <Paragraph>
              Fusce dapibus elit vitae magna convallis, nec tempor ante suscipit. Vivamus feugiat, tortor a luctus mattis, nisl erat hendrerit arcu, a fermentum magna nulla sed eros.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24}>
          <Card title="Ekibimiz" bordered={false}>
            <Paragraph>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
            </Paragraph>
            <Paragraph>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default About;
