import { mongoose } from "~/services/db.server";

const planetSchema = new mongoose.Schema({
  name: String,
});

const Planet = mongoose.models.Planet || mongoose.model("Planet", planetSchema);

export async function getPlanets() {
  const res = await Planet.find();
  return res;
}

export async function getPlanet(name) {
  const res = await Planet.findOne({ name });
  return res;
}
