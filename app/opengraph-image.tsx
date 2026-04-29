import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #f7f3ee 0%, #ffffff 55%, #ecfdf5 100%)",
          padding: 56,
          fontFamily: "sans-serif",
          color: "#0f172a",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 36,
            right: 48,
            borderRadius: 999,
            padding: "10px 18px",
            background: "#059669",
            color: "#ffffff",
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          Boya Badana Istanbul
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            borderRadius: 40,
            border: "1px solid rgba(15,23,42,0.08)",
            background: "rgba(255,255,255,0.85)",
            padding: 48,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#b45309",
              }}
            >
              Istanbul genelinde profesyonel hizmet
            </div>
            <div
              style={{
                fontSize: 64,
                lineHeight: 1.08,
                fontWeight: 800,
                maxWidth: 840,
              }}
            >
              1 gunde temiz, planli ve guven veren boya badana
            </div>
            <div
              style={{
                fontSize: 28,
                lineHeight: 1.45,
                color: "#475569",
                maxWidth: 820,
              }}
            >
              Esyali ev koruma, seffaf fiyat, ucretsiz kesif ve temiz teslim
              odakli landing page yapisi.
            </div>
          </div>

          <div style={{ display: "flex", gap: 16 }}>
            {[
              "Ucretsiz kesif",
              "Temiz teslim",
              "WhatsApp'tan hizli teklif",
            ].map((item) => (
              <div
                key={item}
                style={{
                  borderRadius: 999,
                  border: "1px solid rgba(15,23,42,0.12)",
                  padding: "14px 20px",
                  fontSize: 22,
                  fontWeight: 600,
                  background: "#ffffff",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
