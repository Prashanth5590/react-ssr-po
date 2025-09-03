import  { GamesWidget } from "@ps_devops/test-ssr-widget";
export const dynamic = "force-dynamic";

async function getGames() {
  const res = await fetch(
    "https://qa-pokerstars-de-api.uatsecure.com/ajax/game/getGames",
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch games");

  return res.json();
}

export default async function GamesPage() {
  const games = await getGames();
return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <p>
        Hi Prashanth, welcome to the very first <strong>SSR-powered
        application</strong>!<br />
        It’s great to see everything running smoothly —
        from server-side rendering to reusable React components.
      </p>
      <p>
        This is just the beginning — imagine how much fun and how many
        features we can build on top of this foundation.
      </p>

    <h1>Games List (SSR) - POKERSTARS - DE - QA Env</h1>
  
      <GamesWidget games={games} />
    </main>
  );
}
