import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const MemberDetailRequestCreateSchema = z.object({
  providerId: z.number().default(101),
  name: z.string(),
  password: z.string(),
  email: z.string().email(),
  duplicationType: z.string().default('DUPLICATION_TYPE.NONE'),
});

export type MemberDetailRequestCreateType = z.infer<
  typeof MemberDetailRequestCreateSchema
>;

export class MemberDetailRequestCreate extends createZodDto(
  MemberDetailRequestCreateSchema,
) {}
