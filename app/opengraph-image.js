import { ImageResponse } from "next/og";

export const alt = "BitLinks — Short links, simple sharing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "80px",
          background: "linear-gradient(135deg, #faf5ff, #ede9fe)",
          color: "#0f172a",
        }}
      >
        <div style={{ display: "flex", fontSize: 38, color: "#7c3aed", marginBottom: 40 }}>
          BitLinks
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700 }}>
          Short links.
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, color: "#7c3aed" }}>
          Simple sharing.
        </div>
        <div style={{ display: "flex", fontSize: 28, marginTop: 36 }}>
          Create a custom short URL in seconds.
        </div>
      </div>
    ),
    size
  );
}
