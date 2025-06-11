import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const VerificationResetPasswordRequestCreateSchema = z.object({
  token: z.string().length(16),
  password: z.string().min(8).max(32),
});

export type VerificationResetPasswordRequestCreateType = z.infer<
  typeof VerificationResetPasswordRequestCreateSchema
>;

export class VerificationResetPasswordRequestCreate extends createZodDto(
  VerificationResetPasswordRequestCreateSchema,
) {}
