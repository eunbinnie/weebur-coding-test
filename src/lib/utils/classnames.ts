import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// clsx와 tailwind-merge를 사용하여 클래스 이름을 병합하는 유틸리티 함수
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
