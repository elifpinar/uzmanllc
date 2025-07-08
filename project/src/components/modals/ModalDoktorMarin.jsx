const ModalDoktorMarin = () => (
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
      src="/logos/doktormarinlogo.png"
      alt="Doktor Marin Logo"
      style={{
        width: "120px", // boyutu ihtiyacına göre ayarlayabilirsin
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
      Bu Modal Doktor Marin'e özel
    </h3>
    <p
      style={{
        color: "#000",
        backgroundColor: "rgba(255,255,255,0.7)",
        padding: "0.5rem",
        textAlign: "center",
      }}
    >
      Detaylı açıklama, görseller, formlar vs. eklenebilir.
    </p>
  </div>
);

export default ModalDoktorMarin;
