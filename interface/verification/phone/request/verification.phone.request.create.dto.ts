import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const VerificationPhoneRequestCreateSchema = z.object({
  countryCallingCode: z.string(),
  phoneNumber: z.string(),
});

export type VerificationPhoneRequestCreateType = z.infer<
  typeof VerificationPhoneRequestCreateSchema
>;

export class VerificationPhoneRequestCreate extends createZodDto(
  VerificationPhoneRequestCreateSchema,
) {}
