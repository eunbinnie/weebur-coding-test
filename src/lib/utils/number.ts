// 소수점 첫째자리로 반올림
export function roundToFixedFirst(num: number): number {
  return Math.round(num * 10) / 10;
}
