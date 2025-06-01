import ky from 'ky';

import type {
  AddProductRequestBody,
  ProductListResponse,
  ProductsParams,
} from '@/types/products.types';

import { serializeParams } from '../utils/api';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// 상품 리스트 조회
export const getProducts = async (params: ProductsParams) => {
  const searchParams = serializeParams(params);
  const res = await ky
    .get<ProductListResponse>(`${BASE_URL}/products`, {
      searchParams,
    })
    .json();

  return res;
};

// 상품 생성
export const createProduct = async (body: AddProductRequestBody) => {
  const res = await ky
    .post(`${BASE_URL}/products/add`, {
      json: body,
    })
    .json();

  return res;
};
