/**
 * Storage abstraction:
 *  - Production (Vercel): uses @vercel/kv (Redis) when KV_REST_API_URL is set
 *  - Local dev: falls back to data/bouquets.json
 */
const EXPIRY_SECONDS = 60 * 60 * 24 * 120; // 120 days

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
