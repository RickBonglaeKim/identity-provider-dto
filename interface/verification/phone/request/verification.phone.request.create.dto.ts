import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const VerificationPhoneRequestCreateSchema = z.object({
  countryCallingCode: z.string().max(3),
  phoneNumber: z.string().max(16),
  isWillVerifyDuplication: z
    .preprocess((val) => val === 'true', z.boolean())
    .optional(),
});

export type VerificationPhoneRequestCreateType = z.infer<
  typeof VerificationPhoneRequestCreateSchema
>;

export class VerificationPhoneRequestCreate extends createZodDto(
  VerificationPhoneRequestCreateSchema,
) {}
