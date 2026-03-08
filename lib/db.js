/**
 * db.js — Storage abstraction for Secret Bloom
 *
 * LOCAL (default):  reads/writes data/bouquets.json — works for dev and
 *                   traditional hosting (Railway, Render with a disk).
 *
 * FIREBASE:         set these env vars and deploy anywhere (Vercel, etc.):
 *                     FIREBASE_PROJECT_ID
 *                     FIREBASE_CLIENT_EMAIL
 *                     FIREBASE_PRIVATE_KEY
 *
 * To enable Firebase:
 *   1. npm install firebase-admin
 *   2. Create a Firebase project → Firestore database
 *   3. Generate a service account key (Project Settings → Service Accounts)
 *   4. Add the three env vars above to your hosting provider
 */

import fs from "fs";
import path from "path";

const LOCAL_FILE = path.join(process.cwd(), "data", "bouquets.json");

/* ─── Local JSON helpers ─────────────────────── */
function readLocal() {
  try {
    return JSON.parse(fs.readFileSync(LOCAL_FILE, "utf8") || "{}");
  } catch {
    return {};
  }
}

function writeLocal(data) {
  fs.writeFileSync(LOCAL_FILE, JSON.stringify(data, null, 2));
}

/* ─── Firebase (lazy-loaded only when env vars present) ─ */
let _db = null;

async function getFirestore() {
  if (_db) return _db;
  const { initializeApp, getApps, cert } = await import("firebase-admin/app");
  const { getFirestore: _getFirestore } = await import("firebase-admin/firestore");
  if (!getApps().length) {
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      }),
    });
  }
  _db = _getFirestore();
  return _db;
}

const useFirebase = () =>
  !!(process.env.FIREBASE_PROJECT_ID &&
     process.env.FIREBASE_CLIENT_EMAIL &&
     process.env.FIREBASE_PRIVATE_KEY);

/* ─── Public API ─────────────────────────────── */
export async function saveBloom(id, data) {
  if (useFirebase()) {
    const db = await getFirestore();
    await db.collection("blooms").doc(id).set(data);
  } else {
    const existing = readLocal();
    existing[id] = data;
    writeLocal(existing);
  }
}

export async function getBloom(id) {
  if (useFirebase()) {
    const db = await getFirestore();
    const doc = await db.collection("blooms").doc(id).get();
    return doc.exists ? doc.data() : null;
  } else {
    const data = readLocal();
    return data[id] ?? null;
  }
}
