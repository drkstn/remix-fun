import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPlanets } from "~/services/data.server";

export const loader = async () => {
  const planets = await getPlanets();
  return json(planets);
};

export default function Index() {
  const planets = useLoaderData();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Planets</h1>
      {planets.map((planet) => (
        <p key={planet._id}>
          <Link to={planet.name}>{planet.name}</Link>
        </p>
      ))}
    </div>
  );
}
