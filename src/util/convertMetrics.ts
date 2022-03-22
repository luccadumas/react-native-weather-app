// convert metros/s to km/h
export const convertMetrics = (metersPerSecond: number): number => {
  return Math.round(metersPerSecond * 3.6 * 100) / 100;
}
