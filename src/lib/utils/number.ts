// 소수점 첫째자리로 반올림
export const roundToFixedFirst = (num: number): number => {
  return Math.round(num * 10) / 10;
};

// 숫자에 콤마 추가하는 함수
export const formatNumberWithCommas = (value: string): string => {
  // 숫자만 유지
  const numericValue = value.replace(/[^0-9]/g, '');

  // 숫자 포맷팅 (콤마 추가)
  return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
