import React, { useState } from "react";
import { Row, Col, Card, Typography, Button, Space } from "antd";
import ColorThief from "colorthief";

const { Title } = Typography;

const cardData = [
  {
    title: "Kart 1",
    description: "Uzman Dizel Pompa ve Enjektör Sistemleri",
    image: "/logos/uzmanAutomotive1.png",
    link: "https://www.uzmandizel.com.tr/",
  },
  {
    title: "Kart 5",
    description: "Uzman Dizel Pompa ve Enjektör Sistemleri",
    image: "/logos/uznavlogo.png",
    link: "https://www.uznav.com/",
  },
  {
    title: "Kart 8",
    description: "Uzman Dizel Pompa ve Enjektör Sistemleri",
    image: "/logos/uzmansigortalogo.png",
    link: "http://www.naubilis.com/",
  },
  {
    title: "Kart 8",
    description: "Uzman Dizel Pompa ve Enjektör Sistemleri",
    image: "/logos/uzmandanismanliklogo.png",
    link: "http://www.naubilis.com/",
  },
  {
    title: "Kart 3",
    description: "Uzman Dizel Pompa ve Enjektör Sistemleri",
    image: "/logos/agvlogo.png",
    link: "https://www.agvtechnic.com.tr/",
  },
  {
    title: "Kart 2",
    description: "Uzman Dizel Pompa ve Enjektör Sistemleri",
    image: "/logos/jaltestlogo.png",
    link: "https://www.jaltestturkiye.com/",
  },
  
  {
    title: "Kart 4",
    description: "Uzman Dizel Pompa ve Enjektör Sistemleri",
    image: "/logos/allynavturkiyelogo.png",
    link: "https://www.allynavturkiye.com/",
  },
  
  {
    title: "Kart 6",
    description: "Uzman Dizel Pompa ve Enjektör Sistemleri",
    image: "/logos/naubilislogo.png",
    link: "http://www.naubilis.com/",
  },
  {
    title: "Kart 7",
    description: "Uzman Dizel Pompa ve Enjektör Sistemleri",
    image: "/logos/expertlogo.png",
    link: "http://www.naubilis.com/",
  },
  
  {
    title: "Kart 9",
    description: "Uzman Dizel Pompa ve Enjektör Sistemleri",
    image: "/logos/temlogo.png",
    link: "http://www.naubilis.com/",
  },
  {
    title: "Kart 10",
    description: "Uzman Dizel Pompa ve Enjektör Sistemleri",
    image: "/logos/doktormarinlogo.png",
    link: "http://www.naubilis.com/",
  },
];

const imgContainerStyle = {
  width: "100%",
  height: "180px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  //overflow: "hidden",
};

const imgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "contain",
  transition: "transform 0.4s ease",
};

// RGB'den RGBA şeffaf renk üretici
function mixWithWhite(r, g, b, weight = 0.85, alpha = 0.5) {
  const newR = Math.round(r + (255 - r) * weight);
  const newG = Math.round(g + (255 - g) * weight);
  const newB = Math.round(b + (255 - b) * weight);
  return `rgba(${newR}, ${newG}, ${newB}, ${alpha})`;
}

const Home = () => {
  const [bgColors, setBgColors] = useState(Array(cardData.length).fill("rgba(255, 255, 255, 0.5)"));

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

  return (
    <div style={{ padding: "0rem", backgroundColor: "#F0ECE5", minHeight: "auto" }}>
      <div
        style={{
          backgroundImage: "url('/logos/background2.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          padding: "2rem",
          borderRadius: "1px",
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
                  outline: "none",
                  //boxShadow: "none",
                  maxWidth: 320,
                 backgroundColor: bgColors[index], //her birinin rengine göre 
                 //backgroundColor:"transparent",
                  borderRadius: "8px",
                //backdropFilter: "blur(3px)", // isteğe bağlı: cam efekti
                 boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2) !important"

                }}
                bodyStyle={{ padding: "2rem" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Space direction="vertical" size="middle" align="center" style={{ width: "100%" }}>
                  <div style={imgContainerStyle}>
                    <img
                      src={card.image}
                      alt={card.title}
                      style={imgStyle}
                      crossOrigin="anonymous"
                      onLoad={(e) => handleImageLoad(index, e)}
                      onClick={() => window.open(card.link, "_blank")}
                    />
                  </div>
                  {/* <Title level={5} style={{ textAlign: "center", margin: 0 }}>
                    {card.title}
                  </Title> */}
                  {/* <Button color="default" variant="filled">
                    Daha Fazla
                  </Button> */}
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
