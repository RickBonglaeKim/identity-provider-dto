import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const VerificationEmailRequestReadSchema = z.object({
  email: z.string().email(),
  verificationCode: z.string().length(6),
});

export type VerificationEmailRequestReadType = z.infer<
  typeof VerificationEmailRequestReadSchema
>;

export class VerificationEmailRequestRead extends createZodDto(
  VerificationEmailRequestReadSchema,
) {}
