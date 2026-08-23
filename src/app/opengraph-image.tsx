import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#0D1B26",
          color: "#E8F4FF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ width: "48px", height: "2px", background: "#7EC8E3" }} />
          <div
            style={{
              fontSize: "22px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#7EC8E3",
            }}
          >
            luvi.my.id
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ fontSize: "84px", fontWeight: 700, lineHeight: 1.05 }}>
            {profile.name}
          </div>
          <div style={{ fontSize: "36px", color: "#8AAFBF" }}>{profile.title}</div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "10px", height: "10px", borderRadius: "9999px", background: "#7EC8E3" }} />
          <div
            style={{
              fontSize: "24px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#8AAFBF",
            }}
          >
            Fullstack · AI · Machine Learning
          </div>
        </div>
      </div>
    ),
    size
  );
}
