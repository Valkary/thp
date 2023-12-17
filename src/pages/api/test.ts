import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ params, request }) => {
  return new Response(
    JSON.stringify({
      working: "this shite is working"
    })
  );
}
