import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const MemberDetailRequestCreateSchema = z.object({
  providerId: z.number(),
  name: z.string(),
  password: z.string(),
  email: z.string().email(),
  duplicationType: z.string(),
});

export type MemberDetailRequestCreateType = z.infer<
  typeof MemberDetailRequestCreateSchema
>;

export class MemberDetailRequestCreate extends createZodDto(
  MemberDetailRequestCreateSchema,
) {}
