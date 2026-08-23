import { ImageResponse } from "next/og";
import { projects } from "@/data/projects";

export const alt = "Project";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

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
            {project?.classification ?? "Project"}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ fontSize: project && project.nameProject.length > 24 ? "64px" : "84px", fontWeight: 700, lineHeight: 1.05 }}>
            {project?.nameProject ?? "Project"}
          </div>
          <div style={{ fontSize: "32px", color: "#8AAFBF" }}>
            {project ? project.stacks.slice(0, 5).join(" · ") : ""}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              fontSize: "24px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#8AAFBF",
            }}
          >
            luvi.my.id/projects/{params.slug}
          </div>
        </div>
      </div>
    ),
    size
  );
}
