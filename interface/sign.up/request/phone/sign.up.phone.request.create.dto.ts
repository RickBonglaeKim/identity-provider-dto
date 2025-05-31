import { MemberDetailRequestCreateSchema } from 'dto/interface/member.detail/request/member.detail.request.create.dto';
import { MemberPhoneRequestCreateSchema } from 'dto/interface/member.phone/request/member.phone.request.create.dto';
import { MemberRequestCreateSchema } from 'dto/interface/member/request/member.request.create.dto';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const SignUpWithPhoneRequestCreateSchema = z.object({
  passport: z.string().length(64).optional(), // if the passport exist, this IPD system will return token to issue authorization code.
  member: MemberRequestCreateSchema,
  memberDetail: MemberDetailRequestCreateSchema,
  memberPhone: MemberPhoneRequestCreateSchema,
});

export type SignUpWithPhoneRequestCreateType = z.infer<
  typeof SignUpWithPhoneRequestCreateSchema
>;

export class SignUpWithPhoneRequestCreate extends createZodDto(
  SignUpWithPhoneRequestCreateSchema,
) {}
