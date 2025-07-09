import { useTranslation } from "react-i18next";

const ModalAllynavTurkiye = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        gap: "1rem",
      }}
    >
      <img
        src="/logos/allynavturkiyelogo.png"
        alt="Allynav Türkiye Logo"
        style={{
          width: "120px",
          height: "auto",
          objectFit: "contain",
        }}
      />
      <p
        style={{
          color: "#000",
          backgroundColor: "rgba(255,255,255,0.7)",
          padding: "0.5rem",
          textAlign: "center",
        }}
      >
        {t("allynav")}
      </p>
      <p
        style={{
          color: "#000",
          backgroundColor: "rgba(255,255,255,0.7)",
          padding: "0.5rem",
          textAlign: "center",
          fontSize: "0.9rem",
        }}
      >
        📞 +90 312 123 45 67
        <br />
        ✉️ info@allynav.com.tr
      </p>
    </div>
  );
};

export default ModalAllynavTurkiye;
