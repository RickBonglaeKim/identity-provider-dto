import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const MemberDetailCreateRequestSchema = z.object({
  providerKey: z.string().optional(),
  name: z.string(),
  password: z.string(),
  email: z.string().email(),
});

export type MemberDetailCreateRequestType = z.infer<
  typeof MemberDetailCreateRequestSchema
>;

export class MemberDetailCreateRequest extends createZodDto(
  MemberDetailCreateRequestSchema,
) {}
