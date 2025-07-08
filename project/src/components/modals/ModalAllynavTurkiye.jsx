const ModalAllynavTurkiye = () => (
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
    {/* <h3
      style={{
        color: "#000",
        backgroundColor: "rgba(255,255,255,0.7)",
        padding: "0.5rem",
        textAlign: "center",
      }}
    >
      Bu Modal Allynav Türkiye özel
    </h3> */}
    <p
      style={{
        color: "#000",
        backgroundColor: "rgba(255,255,255,0.7)",
        padding: "0.5rem",
        textAlign: "center",
      }}
    >
      AllyNav, otomatik traktör dümenleme sistemleri ve tarım robotlarıyla, tarımda verimlilik, hassasiyet ve çevre dostu üretimi destekleyen ileri teknolojiler sunar. Otonom çözümler, daha sürdürülebilir ve ekonomik bir üretim modeli sağlar.
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
      📞 +90 312 123 45 67<br />
      ✉️ info@allynav.com.tr
    </p>
  </div>
);

export default ModalAllynavTurkiye;
