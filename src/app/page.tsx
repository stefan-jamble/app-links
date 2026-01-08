import { headers } from "next/headers";

export default async function HomePage() {
  const incomingHeaders = await headers();
  const countryCode = incomingHeaders.get("x-vercel-ip-country") || "Unknown";
  const iframeSrc = countryCode === "BR" ? "/homepage-br.html" : "/homepage.html";

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <iframe
        src={iframeSrc}
        style={{ width: "100%", height: "100%", border: "none" }}
      />
    </div>
  );
}
