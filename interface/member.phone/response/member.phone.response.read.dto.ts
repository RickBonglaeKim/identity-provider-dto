import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const MemberPhoneResponseReadSchema = z.object({
  id: z.number(),
  memberPhoneId: z.number().nullable(),
  memberId: z.number(),
  countryCallingCode: z.string(),
  phoneNumber: z.string(),
});

export type MemberPhoneResponseReadType = z.infer<
  typeof MemberPhoneResponseReadSchema
>;

export class MemberPhoneResponseRead extends createZodDto(
  MemberPhoneResponseReadSchema,
) {
  constructor(
    id: number,
    memberPhoneId: number | null,
    memberId: number,
    countryCallingCode: string,
    phoneNumber: string,
  ) {
    super();
    this.id = id;
    this.memberPhoneId = memberPhoneId;
    this.memberId = memberId;
    this.countryCallingCode = countryCallingCode;
    this.phoneNumber = phoneNumber;
  }
}
