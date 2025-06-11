import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const VerificationPhoneRequestCreateSchema = z.object({
  countryCallingCode: z.string().max(3),
  phoneNumber: z.string().max(16),
});

export type VerificationPhoneRequestCreateType = z.infer<
  typeof VerificationPhoneRequestCreateSchema
>;

export class VerificationPhoneRequestCreate extends createZodDto(
  VerificationPhoneRequestCreateSchema,
) {}
