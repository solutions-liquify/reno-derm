import { ImageResponse } from "next/og";
import { clinic } from "@/data/clinic";

export const alt = clinic.fullName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #135950 0%, #0d3833 60%, #10221f 100%)",
          color: "#f8f6f1",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "#1f8b79",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              color: "white",
            }}
          >
            R
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 34 }}>RenoDerm</div>
            <div style={{ fontSize: 16, letterSpacing: 5, color: "#a6ded2", textTransform: "uppercase" }}>
              Kidney & Skin Clinic
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 68, lineHeight: 1.05, maxWidth: 900 }}>
            Specialised kidney & skin care, under one roof.
          </div>
          <div style={{ fontSize: 26, color: "#d3efe8" }}>
            Dr. Vyoma Mehta Dholakia · Dr. Akash Dholakia · Gota, Ahmedabad
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#a6ded2" }}>
          <span>Rated 5.0 / 5 · {clinic.rating.count} Google reviews</span>
          <span>{clinic.phones[0].number}</span>
        </div>
      </div>
    ),
    size
  );
}
