import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import type { AddProductInput } from '@/schemas/product.schema';

// 상품 뷰 타입
export type ProductView = 'list' | 'grid';

// 상품 리스트 조회 파라미터
export interface ProductsParams {
  limit?: number;
  skip?: number;
  select?: string;
}

// 상품 리스트 조회 응답
export interface ProductListResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  rating: number;
  reviews: Review[];
  thumbnail: string;
}

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Review {
  rating: number;
  comment: string;
  date: string; // ISO date string
  reviewerName: string;
  reviewerEmail: string;
}

export interface ProductMeta {
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  barcode: string;
  qrCode: string;
}

export type Brand = 'Apple' | 'Samsung' | 'Weebur';

// 상품 생성 파라미터
export interface AddProductRequestBody {
  title: string;
  description?: string;
  price: number;
  discountPercentage?: number;
  brand: Brand;
}

// 상품 입력 컴포넌트 타입
export interface ProductInputProps {
  errors: FieldErrors<AddProductInput>;
  register: UseFormRegister<AddProductInput>;
}
