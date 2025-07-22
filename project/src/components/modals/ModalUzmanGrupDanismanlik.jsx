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
        gap: "0rem",
      }}
    >
      <img
        src="/logos/uzmandanismanliklogo.webp"
        loading="lazy"
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
      <p
        style={{
          color: "#000",
          backgroundcolor: "rgba(255,255,255,0.7)",
          padding: "0.5rem",
          textalign: "center",
        }}
      >
        <>
  <p>{t('uzman_group_consultancy_comment1')}</p>
  <p>{t('uzman_group_consultancy_comment2')}</p>
  <p>{t('uzman_group_consultancy_comment3')}</p>
  <p>{t('uzman_group_consultancy_comment4')}</p>
  <p>{t('uzman_group_consultancy_comment5')}</p>
</>

      </p>
    </div>
  );
};

export default ModalUzmanGrupDanismanlik;
