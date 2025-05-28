import { MemberDetailRequestCreateSchema } from 'dto/interface/member.detail/request/member.detail.request.create.dto';
import { MemberPhoneRequestCreateSchema } from 'dto/interface/member.phone/request/member.phone.request.create.dto';
import { MemberRequestCreateSchema } from 'dto/interface/member/request/member.request.create.dto';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const SignUpWithPhoneRequestCreateSchema = z.object({
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
