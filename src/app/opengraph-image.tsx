import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { brand, clinic } from "@/data/clinic";

export const alt = clinic.fullName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const markData = await readFile(join(process.cwd(), "public", brand.logoMark.src), "base64");
  const markSrc = `data:image/png;base64,${markData}`;

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
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 92,
              height: 92,
              borderRadius: 999,
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={markSrc} alt="" width={64} height={56} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 40 }}>
              <span style={{ color: "#a6ded2" }}>Reno</span>
              <span style={{ color: "#e0a42a" }}>Derm</span>
            </div>
            <div style={{ fontSize: 16, letterSpacing: 5, color: "#d3efe8", textTransform: "uppercase" }}>
              Kidney and Skin Clinic
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
          <span>Dermatology {clinic.phones.dermatology.number} · Nephrology {clinic.phones.nephrology.number}</span>
        </div>
      </div>
    ),
    size
  );
}
