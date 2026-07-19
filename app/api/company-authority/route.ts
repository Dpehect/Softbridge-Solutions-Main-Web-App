import {
  softbridgeAuthority,
} from "../../../content/company-authority";

export const dynamic = "force-static";

export function GET() {
  return Response.json(softbridgeAuthority, {
    headers: {
      "Cache-Control":
        "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
      "Access-Control-Allow-Origin": "*",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
