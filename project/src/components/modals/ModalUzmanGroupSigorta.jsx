import { useTranslation } from 'react-i18next';

const ModalUzmanGroupSigorta = () => {
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
        src="/logos/uzmansigortalogo.png"
        alt="Uzman Grup Sigorta Logo"
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
        {t('group_insurance')}
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

export default ModalUzmanGroupSigorta;
