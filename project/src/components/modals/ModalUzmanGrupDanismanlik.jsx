import { useTranslation } from 'react-i18next';

const ModalUzmanGrupDanismanlik = () => {
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
        src="/logos/uzmandanismanliklogo.png"
        alt="Uzman Grup Danışmanlık Logo"
        style={{
          width: "120px",
          height: "auto",
          objectFit: "contain",
        }}
      />
      <h3
        style={{
          color: "#000",
          backgroundColor: "rgba(255,255,255,0.7)",
          padding: "0.5rem",
          textAlign: "center",
        }}
      >
        {t('uzman_group_consultancy')}
      </h3>
      {/* <p
        style={{
          color: "#000",
          backgroundColor: "rgba(255,255,255,0.7)",
          padding: "0.5rem",
          textAlign: "center",
        }}
      >
        Detaylı açıklama, görseller, formlar vs. eklenebilir.
      </p> */}
    </div>
  );
};

export default ModalUzmanGrupDanismanlik;
