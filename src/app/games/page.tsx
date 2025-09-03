/* eslint-disable @typescript-eslint/no-explicit-any */
export const dynamic = "force-dynamic"; // always fetch fresh data

async function getGames(  ) {

  const res = await fetch(
    "https://qa-pokerstars-de-api.uatsecure.com/ajax/game/getGames",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch games");
  }

  return res.json();
}

export default async function GamesPage() {
  const games = await getGames();

  return (
    <main>
      <h1>Games List</h1>
      <ul>
        {games.map((g: any, i: number) => (
          <li key={i}>{g.name}</li>
        ))}
      </ul>
    </main>
  );
}
