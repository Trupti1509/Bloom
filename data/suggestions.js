export const BOUQUET_ITEMS = [
  { id: "rose", label: "Rose", meaning: "For the love you radiate", color: "#ffd6e0" },
  { id: "sunflower", label: "Sunflower", meaning: "For the warmth you bring to every room", color: "#fff3b0" },
  { id: "tulip", label: "Tulip", meaning: "For your grace and quiet elegance", color: "#f3d6ff" },
  { id: "blossom", label: "Blossom", meaning: "For the joy you spread", color: "#ffe0f0" },
  { id: "daisy", label: "Daisy", meaning: "For your gentle spirit", color: "#fffacd" },
  { id: "hibiscus", label: "Hibiscus", meaning: "For your passion and fire", color: "#ffd6ec" },
  { id: "wildflower", label: "Wildflower", meaning: "For your wild, beautiful soul", color: "#f0ffe0" },
  { id: "butterfly", label: "Butterfly", meaning: "For your growth and transformation", color: "#e0f0ff" },
  { id: "chocolate", label: "Chocolate", meaning: "For your sweetness", color: "#ffe8d0" },
  { id: "sparkle", label: "Sparkle", meaning: "For the magic that follows you", color: "#fffff0" },
  { id: "leaf", label: "Leaf", meaning: "For your grounded strength", color: "#e0ffe0" },
  { id: "dove", label: "Dove", meaning: "For your peace and kindness", color: "#f0f0ff" },
];

export const SHARE_TEXTS = [
  "I made a bloom for you. Open it slowly.",
  "Each flower has a hidden note for you.",
  "Someone amazing deserves this. Tap to open.",
];

export const ITEM_LOOKUP = Object.fromEntries(BOUQUET_ITEMS.map((item) => [item.id, item]));
