export default function trapezoid(range: number[], value: number) {
  if (value < range[0] || value > range[3]) return 0;
  if (value < range[1]) {
    return range[0] === range[1] ? 1 : (value - range[0]) / (range[1] - range[0]);
  }
  if (value < range[2]) return 1;
  return (range[3] - value) / (range[3] - range[2]);
}
