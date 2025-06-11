import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const VerificationPhoneRequestReadSchema = z.object({
  countryCallingCode: z.string().max(3),
  phoneNumber: z.string().max(16),
  verificationCode: z.string().length(6),
});

export type VerificationPhoneRequestReadType = z.infer<
  typeof VerificationPhoneRequestReadSchema
>;

export class VerificationPhoneRequestRead extends createZodDto(
  VerificationPhoneRequestReadSchema,
) {}
