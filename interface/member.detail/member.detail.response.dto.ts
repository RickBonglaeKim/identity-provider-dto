import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const MemberDetailResponseSchema = z.object({
  id: z.number(),
  memberDetailId: z.number().nullable(),
  providerId: z.number(),
  memberId: z.number(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  duplicationType: z.string(),
});

export type MemberDetailResponseType = z.infer<
  typeof MemberDetailResponseSchema
>;

export class MemberDetailResponse extends createZodDto(
  MemberDetailResponseSchema,
) {
  constructor(
    id: number,
    memberDetailId: number | null,
    providerId: number,
    memberId: number,
    name: string,
    email: string,
    password: string,
    duplicationType: string,
  ) {
    super();
    this.id = id;
    this.memberDetailId = memberDetailId;
    this.providerId = providerId;
    this.memberId = memberId;
    this.name = name;
    this.email = email;
    this.password = password;
    this.duplicationType = duplicationType;
  }
}
