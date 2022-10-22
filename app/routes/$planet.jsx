import { useCatch, useLoaderData } from "@remix-run/react";
import { getPlanet } from "~/services/data.server";
import invariant from "tiny-invariant";
import { json } from "@remix-run/node";

export const loader = async ({ params }) => {
  invariant(params.planet, "expected params.planet");
  const planet = await getPlanet(params.planet);

  if (!planet) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  return json(planet);
};

export default function Index() {
  const { name, orderFromSun, hasRings, mainAtmosphere, surfaceTemperatureC } =
    useLoaderData();

  const { min, max, mean } = surfaceTemperatureC;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{name}</h1>
      <p>Position: {orderFromSun}</p>
      <p>Rings: {hasRings ? "Yes" : "No"}</p>
      <p>Atmosphere: {mainAtmosphere.join(", ")}</p>
      <div>
        <p>Temperature</p>
        <div className="pl-4">
          <p>Minimum: {min ? min : "Unknown"}</p>
          <p>Maximum: {max ? max : "Unknown"}</p>
          <p>Mean: {mean}</p>
        </div>
      </div>
    </div>
  );
}
