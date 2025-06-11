import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const VerificationFindIdRequestReadSchema = z.object({
  name: z.string().min(2).max(32),
  countryCallingCode: z.string().max(3),
  phoneNumber: z.string().max(16),
});

export type VerificationFindIdRequestReadType = z.infer<
  typeof VerificationFindIdRequestReadSchema
>;

export class VerificationFindIdRequestRead extends createZodDto(
  VerificationFindIdRequestReadSchema,
) {}
