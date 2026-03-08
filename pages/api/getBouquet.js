import { loadBouquet } from "../../lib/storage.js";

export default async function handler(req, res) {
  try {
    if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

    const { id } = req.query;
    if (!id) return res.status(400).json({ error: "Missing id" });

    const bouquet = await loadBouquet(id);
    if (!bouquet) return res.status(404).json({ error: "Bouquet not found" });

    return res.status(200).json(bouquet);
  } catch (error) {
    return res.status(500).json({
      error: error?.message || "Could not load bloom",
    });
  }
}
