export async function GET() {
  try {
    const res = await fetch(
      "https://qa-pokerstars-de-api.uatsecure.com/ajax/game/getGames",
      { cache: "no-store" } // avoid caching in SSR
    );

    if (!res.ok) {
      return new Response(JSON.stringify({ error: "Failed to fetch games" }), {
        status: res.status,
        headers: { "Content-Type": "application/json" },
      });
    }

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Something went wrong, " + error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
