import { nanoid } from "nanoid";
import { createBouquetId, saveBouquet } from "../../lib/storage.js";
import { ITEM_LOOKUP } from "../../data/suggestions.js";
import { resolveTheme } from "../../data/themes.js";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { items, message, fromName, recipientName, theme } = req.body || {};

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "Pick at least one item" });
    }

    if (!message || !message.trim()) {
      return res.status(400).json({ error: "Message is required" });
    }

    const normalizedItems = items
      .map((item) => ITEM_LOOKUP[item?.id])
      .filter(Boolean)
      .slice(0, 12);

    if (normalizedItems.length === 0) {
      return res.status(400).json({ error: "No valid items were provided" });
    }

    const bouquet = {
      items: normalizedItems,
      message: message.trim(),
      fromName: (fromName || "").trim(),
      recipientName: (recipientName || "").trim(),
      theme: resolveTheme(theme || "performer"),
      createdAt: new Date().toISOString(),
    };

    let id = nanoid(8);

    try {
      await saveBouquet(id, bouquet);
    } catch {
      // Vercel's filesystem is read-only without KV configured.
      // Fall back to an encoded payload so shares still work.
      id = createBouquetId(bouquet);
    }

    return res.status(200).json({ id });
  } catch (error) {
    return res.status(500).json({
      error: error?.message || "Could not create bloom",
    });
  }
}
