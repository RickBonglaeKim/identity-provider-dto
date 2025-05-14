import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const MemberDetailCreateRequestSchema = z.object({
  providerId: z.number(),
  name: z.string(),
  password: z.string(),
  email: z.string().email(),
  duplicationType: z.string(),
});

export type MemberDetailCreateRequestType = z.infer<
  typeof MemberDetailCreateRequestSchema
>;

export class MemberDetailCreateRequest extends createZodDto(
  MemberDetailCreateRequestSchema,
) {}
