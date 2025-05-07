import { MemberDetailCreateRequestSchema } from 'dto/interface/member.detail/create/member.detail.create.request.dto';
import { MemberPhoneCreateRequestSchema } from 'dto/interface/member.phone/create/member.phone.create.request.dto';
import { MemberCreateRequestSchema } from 'dto/interface/member/create/member.create.request.dto';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const SignupWithPhoneCreateRequestSchema = z.object({
  member: MemberCreateRequestSchema,
  memberDetail: MemberDetailCreateRequestSchema,
  memberPhone: MemberPhoneCreateRequestSchema,
});

export type SignupWithPhoneCreateRequestType = z.infer<
  typeof SignupWithPhoneCreateRequestSchema
>;

export class SignupWithPhoneCreateRequest extends createZodDto(
  SignupWithPhoneCreateRequestSchema,
) {}
