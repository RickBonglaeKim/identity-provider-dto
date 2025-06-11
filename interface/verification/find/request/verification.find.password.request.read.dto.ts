import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const VerificationFindPasswordRequestReadSchema = z.object({
  email: z.string().email(),
  countryCallingCode: z.string().max(3),
  phoneNumber: z.string().max(16),
});

export type VerificationFindPasswordRequestReadType = z.infer<
  typeof VerificationFindPasswordRequestReadSchema
>;

export class VerificationFindPasswordRequestRead extends createZodDto(
  VerificationFindPasswordRequestReadSchema,
) {}
