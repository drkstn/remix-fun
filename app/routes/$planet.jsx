import { useLoaderData } from "@remix-run/react";
import { getPlanet } from "~/services/data.server";

export const loader = async ({ params }) => {
  const planet = await getPlanet(params.planet);

  return planet;
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
