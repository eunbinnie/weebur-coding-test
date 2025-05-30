// 파라미터를 직렬화하는 유틸리티 함수
export function serializeParams<T extends Record<string, any>>(
  params: T,
): Record<string, string> {
  return Object.entries(params)
    .filter(([, value]) => value !== undefined && value !== null)
    .reduce(
      (acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      },
      {} as Record<string, string>,
    );
}
