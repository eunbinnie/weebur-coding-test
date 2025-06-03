import { z } from 'zod';

export const addProductSchema = z.object({
  title: z
    .string()
    .min(1, { message: '상품명 입력은 필수입니다.' })
    .max(15, { message: '15자 이내로 입력되어야 합니다.' }),
  description: z.string().optional(),
  price: z
    .number()
    .min(1, { message: '가격을 입력해주세요.' })
    .min(1000, { message: '최소 1000원 이상 입력해주세요.' }),
  // discountPercentage: z.number().min(0, { message: '할인율을 입력해주세요.' }),
  // brand: z.string().min(1, { message: '브랜드를 입력해주세요.' }),
});

export type AddProductInput = z.infer<typeof addProductSchema>;
