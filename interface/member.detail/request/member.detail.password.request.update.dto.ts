import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const MemberDetailPasswordRequestUpdateSchema = z.object({
  password: z.string().min(8).max(256),
});

export type MemberDetailPasswordRequestUpdateType = z.infer<
  typeof MemberDetailPasswordRequestUpdateSchema
>;

export class MemberDetailPasswordRequestUpdate extends createZodDto(
  MemberDetailPasswordRequestUpdateSchema,
) {}
