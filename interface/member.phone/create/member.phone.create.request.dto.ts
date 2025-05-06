import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const MemberPhoneCreateRequestSchema = z.object({
  isPrimary: z.boolean(),
  countryCallingCode: z.string(),
  phoneNumber: z.string(),
});

export type MemberPhoneCreateREquestType = z.infer<
  typeof MemberPhoneCreateRequestSchema
>;

export class MemberPhoneCreateREquest extends createZodDto(
  MemberPhoneCreateRequestSchema,
) {}
