/* Lightweight petal shapes for canvas particle rendering */

export const PETAL_COLORS = [
  "#f8bbd0", // soft pink
  "#fce4ec", // blush
  "#e1bee7", // lavender
  "#f3e5f5", // pale lilac
  "#fff9c4", // soft yellow
  "#dcedc8", // sage hint
];

/**
 * Draw a single petal shape on a canvas 2D context.
 * Call ctx.save() before and ctx.restore() after.
 * The petal is drawn centered at (0, 0), size ~12x18 baseline.
 */
export function drawPetal(ctx, color = "#f8bbd0", scale = 1) {
  ctx.scale(scale, scale);
  ctx.beginPath();
  ctx.moveTo(0, -9);
  ctx.bezierCurveTo(4, -7, 6, -2, 5.5, 4);
  ctx.bezierCurveTo(5, 8, 2, 9, 0, 9);
  ctx.bezierCurveTo(-2, 9, -5, 8, -5.5, 4);
  ctx.bezierCurveTo(-6, -2, -4, -7, 0, -9);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.85;
  ctx.fill();
}
