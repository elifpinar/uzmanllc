import React, { useState } from "react";
import { Row, Col, Card, Typography, Space, Modal } from "antd";
import ColorThief from "colorthief";
import { ModalDoktorMarin, ModalExpert, ModalAllynavTurkiye, ModalUzmanGrupDanismanlik,ModalUzmanGroupSigorta } from "../components/modals";

const { Title } = Typography;

const cardData = [
  {
    title: "Uzman Otomativ Sistemleri",
    description: "Uzman Dizel Pompa ve Enjektör Sistemleri",
    image: "/logos/uzmanAutomotive1.png",
    link: "https://www.uzmandizel.com.tr/",
  },
  {
    title: "Uznav Otomatik Dümenleme Sistemleri",
    description: "Uznav Otomatik Dümenleme Sistemleri",
    image: "/logos/uznavlogo.png",
    link: "https://www.uznav.com/",
  },
  {
    title: "Uzman Grup Sigorta ",
    description: "Uzman Grup Sigorta",
    image: "/logos/uzmansigortalogo.png",
    modalComponent: ModalUzmanGroupSigorta,
  },
  {
    title: "Uzman Grup Danışmanlık",
    description: "Uzman Grup Danışmanlık",
    image: "/logos/uzmandanismanliklogo.png",
    modalComponent: ModalUzmanGrupDanismanlik,
  },
  {
    title: "AGV Technic",
    description: "AGV Technic",
    image: "/logos/agvlogo.png",
    link: "https://www.agvtechnic.com.tr/",
  },
  {
    title: "Jaltest Türkiye",
    description: "Jaltest Türkiye",
    image: "/logos/jaltestlogo.png",
    link: "https://www.jaltestturkiye.com/",
  },
  {
    title: "TEM Traktör Ekspertiz Merkezi",
    description: "TEM Traktör Ekspertiz Merkezi",
    image: "/logos/temlogo.png",
    link: "https://temeks.com/",
  },
  {
    title: "Allynav Türkiye",
    description: "Allynav Türkiye",
    image: "/logos/allynavturkiyelogo.png",
    link:"https://www.allynavturkiye.com/",
    //modalComponent: ModalAllynavTurkiye
  },
  {
    title: "XTool Türkiye",
    description: "XTool Türkiye",
    image: "/logos/xtoollogo.png",
    link: "https://www.xtoolturkiye.com/",
  },
  {
    title: "NauBilis",
    description: "NauBilis",
    image: "/logos/naubilislogo.png",
    link: "http://www.naubilis.com/",
  },
  {
    title: "Expert Smart Agriculture Solutions",
    description: "Expert Smart Agriculture Solutions",
    image: "/logos/expertlogo.png",
     modalComponent: ModalExpert,
  },
  {
    title: "Doktor Marin",
    description: "Doktor Marin",
    image: "/logos/doktormarinlogo.png",
    modalComponent: ModalDoktorMarin,
  },
];

const Home = () => {
  const [bgColors, setBgColors] = useState(Array(cardData.length).fill("rgba(255, 255, 255, 0.5)"));
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [SelectedModalComponent, setSelectedModalComponent] = useState(null);

  const handleMouseEnter = (e) => {
    e.currentTarget.querySelector("img").style.transform = "scale(1.1)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.querySelector("img").style.transform = "scale(1)";
  };

  const handleImageLoad = (index, e) => {
    const colorThief = new ColorThief();
    const img = e.target;

    if (img.complete) {
      try {
        const [r, g, b] = colorThief.getColor(img);
        const softTransparentColor = mixWithWhite(r, g, b);
        setBgColors((prev) => {
          const newColors = [...prev];
          newColors[index] = softTransparentColor;
          return newColors;
        });
      } catch (error) {
        console.error("Renk çıkarma hatası:", error);
      }
    }
  };

  const handleImageClick = (card) => {
    if (card.modalComponent) {
      setSelectedModalComponent(() => card.modalComponent);
      setIsModalVisible(true);
    } else if (card.link) {
      window.open(card.link, "_blank");
    }
  };

  return (
    <div style={{ padding: "0rem", backgroundColor: "#F0ECE5", minHeight: "auto" }}>
      <div
        style={{
          backgroundImage: "url('/logos/background2.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          padding: "2rem",
          maxWidth: "2300px",
          margin: "0 auto",
        }}
      >
        <Row gutter={[24, 24]} justify="center">
          {cardData.map((card, index) => (
            <Col
              key={index}
              xs={24}
              sm={24}
              md={12}
              lg={8}
              xl={6}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                hoverable={false}
                style={{
                  width: "100%",
                  border: "0px",
                  maxWidth: 320,
                  backgroundColor: bgColors[index],
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                }}
                bodyStyle={{ padding: "2rem" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Space direction="vertical" size="middle" align="center" style={{ width: "100%" }}>
                  <div style={{ width: "100%", height: "180px", display: "flex", justifyContent: "center", alignItems: "center", padding: "1px" }}>
                    <img
                      src={card.image}
                      alt={card.title}
                      style={{ width: "100%", height: "100%", objectFit: "contain", transition: "transform 0.4s ease" }}
                      crossOrigin="anonymous"
                      onLoad={(e) => handleImageLoad(index, e)}
                      onClick={() => handleImageClick(card)}
                    />
                  </div>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Modal gösterimi */}
      <Modal
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        width={800}
      >
        {SelectedModalComponent && <SelectedModalComponent />}
      </Modal>
    </div>
  );
};

// RGB'den RGBA şeffaf renk üretici
function mixWithWhite(r, g, b, weight = 0.85, alpha = 0.5) {
  const newR = Math.round(r + (255 - r) * weight);
  const newG = Math.round(g + (255 - g) * weight);
  const newB = Math.round(b + (255 - b) * weight);
  return `rgba(${newR}, ${newG}, ${newB}, ${alpha})`;
}

export default Home;
