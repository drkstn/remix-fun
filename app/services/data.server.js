import { mongoose } from "~/services/db.server";

const planetSchema = new mongoose.Schema({});

const Planet = mongoose.models.Planet || mongoose.model("Planet", planetSchema);

export async function getPlanets() {
  const posts = await Planet.find();
  return posts;
}
