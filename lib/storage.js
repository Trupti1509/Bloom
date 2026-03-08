import { ITEM_LOOKUP } from "../data/suggestions.js";
import { resolveTheme } from "../data/themes.js";

/**
 * Storage abstraction:
 *  - Production (Vercel): uses @vercel/kv (Redis) when KV_REST_API_URL is set
 *  - Local dev: falls back to data/bouquets.json
 *  - Portable fallback: bouquet data can also be embedded directly in the id
 */
const EXPIRY_SECONDS = 60 * 60 * 24 * 120; // 120 days

function normalizeBouquet(data) {
  const normalizedItems = Array.isArray(data?.items)
    ? data.items
        .map((item) => ITEM_LOOKUP[item?.id] || ITEM_LOOKUP[item?.key] || item)
        .filter((item) => item?.id)
        .slice(0, 12)
    : [];

  if (!normalizedItems.length) return null;

  return {
    items: normalizedItems,
    message: String(data?.message || "").trim(),
    fromName: String(data?.fromName || "").trim(),
    recipientName: String(data?.recipientName || "").trim(),
    theme: resolveTheme(data?.theme || "performer"),
    createdAt: data?.createdAt || new Date().toISOString(),
  };
}

export function createBouquetId(data) {
  const bouquet = normalizeBouquet(data);
  if (!bouquet || !bouquet.message) {
    throw new Error("Cannot encode an empty bouquet");
  }

  const payload = {
    i: bouquet.items.map((item) => item.id),
    m: bouquet.message,
    f: bouquet.fromName,
    r: bouquet.recipientName,
    t: bouquet.theme,
    c: bouquet.createdAt,
  };

  return Buffer.from(JSON.stringify(payload), "utf8").toString("base64url");
}

function decodeBouquetId(id) {
  if (!id || typeof id !== "string" || id.length < 16) return null;

  try {
    const parsed = JSON.parse(Buffer.from(id, "base64url").toString("utf8"));
    if (!Array.isArray(parsed?.i) || !parsed?.m) return null;

    return normalizeBouquet({
      items: parsed.i.map((itemId) => ({ id: itemId })),
      message: parsed.m,
      fromName: parsed.f,
      recipientName: parsed.r,
      theme: parsed.t,
      createdAt: parsed.c,
    });
  } catch {
    return null;
  }
}

async function getKv() {
  if (!process.env.KV_REST_API_URL) return null;
  try {
    const mod = await import("@vercel/kv");
    return mod.kv;
  } catch {
    return null;
  }
}

export async function saveBouquet(id, data) {
  const kv = await getKv();
  if (kv) {
    await kv.set(`bouquet:${id}`, data, { ex: EXPIRY_SECONDS });
    return;
  }
  // Local file fallback
  const { default: fs } = await import("fs");
  const { default: path } = await import("path");
  const filePath = path.join(process.cwd(), "data", "bouquets.json");
  let existing = {};
  try {
    existing = JSON.parse(fs.readFileSync(filePath, "utf8") || "{}");
  } catch {}
  existing[id] = data;
  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));
}

export async function loadBouquet(id) {
  const embedded = decodeBouquetId(id);
  if (embedded) return embedded;

  const kv = await getKv();
  if (kv) {
    return (await kv.get(`bouquet:${id}`)) || null;
  }
  // Local file fallback
  const { default: fs } = await import("fs");
  const { default: path } = await import("path");
  const filePath = path.join(process.cwd(), "data", "bouquets.json");
  try {
    const data = JSON.parse(fs.readFileSync(filePath, "utf8") || "{}");
    return data[id] || null;
  } catch {
    return null;
  }
}
