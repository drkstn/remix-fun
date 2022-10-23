import { authenticator } from "~/services/auth.server";
import { Link } from "react-router-dom";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ request }) => {
  // authenticator.isAuthenticated function returns the user object if found
  // if user is not authenticated then user would be redirected back to homepage ("/" route)
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  return json(user);
};

export default function NewPlanet() {
  const user = useLoaderData();
  console.log(user);

  return (
    <div>
      <h2 className="text-xl font-bold">{user.displayName}</h2>
      <h1 className="text-3xl font-bold">New Planet</h1>
      <hr />
      <p>
        <Link to="/dashboard">Dash</Link>
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
    </div>
  );
}
