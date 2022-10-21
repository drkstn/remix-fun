import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPlanets } from "~/services/data.server";

export const loader = async () => {
  const planets = await getPlanets();
  return json(planets);
};

export default function Index() {
  const planets = useLoaderData();

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {planets.map((planet) => (
        <p key={planet._id}>{planet.name}</p>
      ))}
    </div>
  );
}
