"use client";

const LAYOUTS = {
  mini: { width: 132, height: 154 },
  card: { width: 344, height: 398 },
  hero: { width: 452, height: 520 },
};

const FLOWER_SLOTS = [
  { x: 64, y: 126, scale: 0.98, rotate: -20, kind: "open", z: 8 },
  { x: 116, y: 76, scale: 1.02, rotate: -10, kind: "daisy", z: 10 },
  { x: 186, y: 44, scale: 1.16, rotate: 0, kind: "sun", z: 12 },
  { x: 248, y: 84, scale: 1.04, rotate: 8, kind: "open", z: 10 },
  { x: 304, y: 128, scale: 0.98, rotate: 18, kind: "bell", z: 8 },
  { x: 78, y: 192, scale: 0.86, rotate: -18, kind: "tulip", z: 9 },
  { x: 136, y: 156, scale: 0.94, rotate: -8, kind: "daisy", z: 11 },
  { x: 192, y: 146, scale: 1.02, rotate: 2, kind: "rosette", z: 13 },
  { x: 254, y: 178, scale: 0.9, rotate: 12, kind: "hibiscus", z: 11 },
  { x: 118, y: 244, scale: 0.82, rotate: -10, kind: "round", z: 14 },
  { x: 182, y: 230, scale: 0.86, rotate: 0, kind: "rosette", z: 15 },
  { x: 252, y: 246, scale: 0.8, rotate: 10, kind: "round", z: 14 },
];

const LEAF_SPRAYS = [
  { x: 80, y: 290, scale: 1.18, rotate: -46 },
  { x: 138, y: 266, scale: 0.96, rotate: -18 },
  { x: 184, y: 278, scale: 0.94, rotate: 0 },
  { x: 238, y: 270, scale: 0.98, rotate: 18 },
  { x: 294, y: 292, scale: 1.22, rotate: 42 },
  { x: 94, y: 334, scale: 0.78, rotate: -62 },
  { x: 274, y: 338, scale: 0.82, rotate: 58 },
];

const FILLER_SPRIGS = [
  { x: 150, y: 204, scale: 1.02, rotate: -10, color: "#b17ae2" },
  { x: 198, y: 206, scale: 1.08, rotate: 8, color: "#c78df1" },
  { x: 124, y: 170, scale: 0.74, rotate: -12, color: "#658ce8" },
  { x: 238, y: 170, scale: 0.74, rotate: 12, color: "#658ce8" },
];

const ITEM_STYLES = {
  rose: { petal: "#ff677d", deep: "#d83e57", center: "#ffd8ab", type: "rosette" },
  tulip: { petal: "#ff5b61", deep: "#db3444", center: "#ffe1a8", type: "tulip" },
  sunflower: { petal: "#ff8a00", deep: "#e56400", center: "#1e140d", type: "sun" },
  blossom: { petal: "#ff71af", deep: "#e24888", center: "#ffe3af", type: "open" },
  daisy: { petal: "#f5a7b7", deep: "#ee7c95", center: "#fff0d0", type: "daisy" },
  hibiscus: { petal: "#ff4d63", deep: "#d81f43", center: "#ffe2aa", type: "hibiscus" },
  wildflower: { petal: "#7c45cc", deep: "#5b279d", center: "#ffd666", type: "star" },
  butterfly: { petal: "#8b62da", deep: "#633fb3", center: "#ffe6b2", type: "star" },
  chocolate: { petal: "#cf8c48", deep: "#a8662f", center: "#f6e1b2", type: "round" },
  sparkle: { petal: "#f2b348", deep: "#d18b1d", center: "#fff0c7", type: "star" },
  leaf: { petal: "#72b463", deep: "#4f8b45", center: "#def1bf", type: "bud" },
  dove: { petal: "#b4c5ff", deep: "#7f95e2", center: "#fff5d0", type: "bell" },
};

const FALLBACK_FLOWERS = ["rose", "daisy", "tulip", "blossom", "sunflower"];

function normalizeItems(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return FALLBACK_FLOWERS.map((id) => ({ id }));
  }
  return items.slice(0, 12);
}

function getItemStyle(item, index) {
  const id = item?.id || FALLBACK_FLOWERS[index % FALLBACK_FLOWERS.length];
  return ITEM_STYLES[id] || ITEM_STYLES.rose;
}

function LeafShape({ x, y, scale = 1, rotate = 0, gradientId, className = "bouquetLeaf" }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`} className={className}>
      <path d="M0 0 C26 -16 58 -24 80 -10 C58 6 28 18 0 0 Z" fill={`url(#${gradientId})`} />
      <path d="M4 -1 C26 -2 52 -2 78 -6" className="bouquetLeafVein" />
      <path d="M24 8 C40 -2 56 -10 68 -12" className="bouquetLeafVein" />
      <path d="M22 -10 C40 -8 58 -6 72 -2" className="bouquetLeafVein" />
    </g>
  );
}

function FillerSprig({ x, y, scale = 1, rotate = 0, color = "#b17ae2" }) {
  const dots = [
    [0, 0, 8],
    [-14, -14, 6],
    [14, -10, 6],
    [-8, -28, 5],
    [10, -24, 5],
    [-18, -38, 4],
    [2, -40, 4],
    [18, -34, 4],
  ];

  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`} className="bouquetFiller">
      <path d="M0 62 C-2 34 -4 16 0 0" className="bouquetFillerStem" />
      {dots.map(([dx, dy, r], index) => (
        <circle
          key={`${dx}-${dy}-${index}`}
          cx={dx}
          cy={dy}
          r={r}
          fill={color}
          opacity={0.92 - index * 0.05}
        />
      ))}
    </g>
  );
}

function petalRing(count, radiusX, radiusY, fill, scaleY = 1) {
  return Array.from({ length: count }, (_, index) => {
    const angle = (index * 360) / count;
    return (
      <ellipse
        key={`petal-${count}-${angle}`}
        cx="0"
        cy={-radiusY}
        rx={radiusX}
        ry={radiusY}
        fill={fill}
        transform={`rotate(${angle}) scale(1 ${scaleY})`}
      />
    );
  });
}

function FlowerGlyph({ kind, colors }) {
  switch (kind) {
    case "sun":
      return (
        <g>
          {petalRing(16, 9.5, 26, colors.petal, 1.02)}
          {petalRing(10, 6, 16, colors.deep, 0.96)}
          <circle r="18" fill={colors.center} />
          <circle r="13" fill="#221611" />
          {Array.from({ length: 18 }, (_, index) => {
            const angle = (index * 360) / 18;
            const tx = Math.cos((angle * Math.PI) / 180) * 7.5;
            const ty = Math.sin((angle * Math.PI) / 180) * 7.5;
            return <circle key={angle} cx={tx} cy={ty} r="1.2" fill="#f0b545" />;
          })}
        </g>
      );
    case "daisy":
      return (
        <g>
          {petalRing(12, 10, 22, colors.petal)}
          {petalRing(6, 7, 14, colors.deep, 0.92)}
          <circle r="14" fill={colors.center} />
          <circle r="6.5" fill="#f7e0b2" />
        </g>
      );
    case "tulip":
      return (
        <g>
          <path d="M0 18 C-16 10 -16 -18 -6 -24 C-2 -18 -1 -12 0 -6 C1 -12 2 -18 6 -24 C16 -18 16 10 0 18 Z" fill={colors.petal} />
          <path d="M0 12 C-12 6 -10 -10 -2 -14 C-1 -10 -1 -6 0 -2 C1 -6 1 -10 2 -14 C10 -10 12 6 0 12 Z" fill={colors.deep} opacity="0.86" />
          <circle cy="-3" r="4" fill={colors.center} />
        </g>
      );
    case "hibiscus":
      return (
        <g>
          {petalRing(5, 12, 20, colors.petal)}
          <circle r="12" fill={colors.deep} opacity="0.88" />
          <path d="M0 0 C6 -4 10 -10 14 -26" stroke="#f1d36c" strokeWidth="3.4" strokeLinecap="round" fill="none" />
          <circle cx="14" cy="-26" r="4" fill={colors.center} />
        </g>
      );
    case "bell":
      return (
        <g>
          <path d="M-18 -6 C-18 -24 -8 -34 0 -34 C8 -34 18 -24 18 -6 C18 10 8 20 0 20 C-8 20 -18 10 -18 -6 Z" fill={colors.petal} />
          <path d="M-11 -12 C-10 -24 -4 -30 0 -30 C4 -30 10 -24 11 -12" fill="none" stroke={colors.deep} strokeWidth="4" strokeLinecap="round" />
          <circle cy="2" r="7" fill={colors.center} />
        </g>
      );
    case "star":
      return (
        <g>
          {petalRing(6, 6.5, 18, colors.petal)}
          <circle r="9" fill={colors.deep} />
          <circle r="4.5" fill={colors.center} />
        </g>
      );
    case "bud":
      return (
        <g>
          <path d="M0 18 C-12 8 -10 -10 0 -20 C10 -10 12 8 0 18 Z" fill={colors.petal} />
          <path d="M0 14 C-6 8 -4 -4 0 -12 C4 -4 6 8 0 14 Z" fill={colors.deep} opacity="0.84" />
        </g>
      );
    case "round":
      return (
        <g>
          {petalRing(8, 9, 18, colors.petal)}
          <circle r="15" fill={colors.deep} opacity="0.9" />
          <circle r="7" fill={colors.center} />
        </g>
      );
    case "open":
      return (
        <g>
          {petalRing(6, 10, 20, colors.petal)}
          {petalRing(3, 7, 14, colors.deep, 0.94)}
          <circle r="9" fill={colors.center} />
        </g>
      );
    case "rosette":
    default:
      return (
        <g>
          {petalRing(10, 9, 18, colors.petal)}
          {petalRing(8, 6, 12, colors.deep, 0.96)}
          <circle r="7" fill={colors.center} />
        </g>
      );
  }
}

function flowerStemPath(x, y) {
  const dx = x - 180;
  const pull = dx * 0.26;
  const midX = 180 + pull;
  const upperX = x - dx * 0.14;
  return `M180 360 C ${midX} 312, ${upperX} 246, ${x} ${y + 22}`;
}

export default function BouquetCluster({ items, variant = "card", className = "" }) {
  const layout = LAYOUTS[variant] || LAYOUTS.card;
  const normalized = normalizeItems(items);
  const bouquetFlowers = normalized
    .map((item, index) => ({ item, slot: FLOWER_SLOTS[index], index }))
    .filter((entry) => entry.slot);
  const layeredFlowers = [...bouquetFlowers].sort((a, b) => a.slot.z - b.slot.z);

  return (
    <div
      className={`bouquetCluster bouquetCluster-${variant} ${className}`.trim()}
      style={{ width: layout.width, height: layout.height }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 360 420" className="bouquetSvg" role="img" aria-label="bouquet illustration">
        <defs>
          <linearGradient id={`wrapLeft-${variant}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1b7d82" />
            <stop offset="100%" stopColor="#0b4450" />
          </linearGradient>
          <linearGradient id={`wrapRight-${variant}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#b7b9f2" />
            <stop offset="22%" stopColor="#ddd7ff" />
            <stop offset="100%" stopColor="#efe2d6" />
          </linearGradient>
          <linearGradient id={`leaf-${variant}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#46a548" />
            <stop offset="100%" stopColor="#166f2e" />
          </linearGradient>
          <linearGradient id={`stem-${variant}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#77b04d" />
            <stop offset="100%" stopColor="#5c8d37" />
          </linearGradient>
          <linearGradient id={`bundle-${variant}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#b6d173" />
            <stop offset="100%" stopColor="#7ea44e" />
          </linearGradient>
          <linearGradient id={`bow-${variant}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d6df8d" />
            <stop offset="100%" stopColor="#7b9e4c" />
          </linearGradient>
        </defs>

        {bouquetFlowers.map(({ item, slot, index }) => {
          return (
            <path
              key={`stem-${item.id || index}`}
              d={flowerStemPath(slot.x, slot.y)}
              className="bouquetStemPath"
              style={{ stroke: `url(#stem-${variant})` }}
            />
          );
        })}

        {LEAF_SPRAYS.map((leaf, index) => (
          <LeafShape
            key={`leaf-${index}`}
            x={leaf.x}
            y={leaf.y}
            scale={leaf.scale}
            rotate={leaf.rotate}
            gradientId={`leaf-${variant}`}
          />
        ))}

        {FILLER_SPRIGS.map((sprig, index) => (
          <FillerSprig
            key={`sprig-${index}`}
            x={sprig.x}
            y={sprig.y}
            scale={sprig.scale}
            rotate={sprig.rotate}
            color={sprig.color}
          />
        ))}

        <path
          d="M130 388 C146 332 158 282 180 204 C200 278 214 334 230 388"
          fill={`url(#bundle-${variant})`}
          className="bouquetBundleShape"
        />
        <path d="M46 252 L176 206 L160 402 L32 356 Z" fill={`url(#wrapLeft-${variant})`} className="bouquetWrapShape" />
        <path d="M186 206 L314 248 L328 356 L198 402 Z" fill={`url(#wrapRight-${variant})`} className="bouquetWrapShape" />
        <path d="M62 272 L170 214 L160 388" className="bouquetWrapFold" />
        <path d="M192 214 L298 270 L198 388" className="bouquetWrapFold" />
        <path d="M152 320 C166 306 194 306 208 320 C196 338 164 338 152 320 Z" fill={`url(#bow-${variant})`} className="bouquetBow" />
        <path d="M136 314 C126 304 118 302 110 306 C116 320 124 328 144 328" fill={`url(#bow-${variant})`} className="bouquetBow" />
        <path d="M224 314 C234 304 242 302 250 306 C244 320 236 328 216 328" fill={`url(#bow-${variant})`} className="bouquetBow" />

        {layeredFlowers.map(({ item, slot, index }) => {
          const colors = getItemStyle(item, index);
          const kind = colors.type || slot.kind;
          return (
            <g
              key={`flower-${item.id || index}`}
              transform={`translate(${slot.x} ${slot.y}) rotate(${slot.rotate}) scale(${slot.scale})`}
              className="bouquetFlowerGroup"
            >
              <FlowerGlyph kind={kind || slot.kind} colors={colors} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
