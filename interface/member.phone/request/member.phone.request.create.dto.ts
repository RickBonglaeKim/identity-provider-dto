import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const MemberPhoneRequestCreateSchema = z.object({
  memberPhoneId: z.number().optional(),
  memberDetailId: z.number().optional(),
  countryCallingCode: z.string(),
  phoneNumber: z.string(),
});

export type MemberPhoneRequestCreateType = z.infer<
  typeof MemberPhoneRequestCreateSchema
>;

export class MemberPhoneRequestCreate extends createZodDto(
  MemberPhoneRequestCreateSchema,
) {}
