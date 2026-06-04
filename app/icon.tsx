import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#111111",
          color: "#FAF8F6",
          fontSize: 20,
          fontWeight: 700,
          letterSpacing: "-0.04em",
          fontFamily: "sans-serif",
          borderRadius: 6,
        }}
      >
        L
      </div>
    ),
    { ...size }
  );
}
