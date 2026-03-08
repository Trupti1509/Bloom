import { loadBouquet } from "../../lib/storage.js";

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).end();

  const { id } = req.query;
  if (!id) return res.status(400).json({ error: "Missing id" });

  const bouquet = await loadBouquet(id);
  if (!bouquet) return res.status(404).json({ error: "Bouquet not found" });

  res.status(200).json(bouquet);
}
