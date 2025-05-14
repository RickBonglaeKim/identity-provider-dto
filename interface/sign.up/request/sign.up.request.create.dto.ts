import { MemberDetailRequestCreateSchema } from 'dto/interface/member.detail/request/member.detail.request.create.dto';
import { MemberRequestCreateSchema } from 'dto/interface/member/request/member.request.create.dto';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const SignupRequestCreateSchema = z.object({
  member: MemberRequestCreateSchema,
  memberDetail: MemberDetailRequestCreateSchema,
});

export type SignupRequestCreateType = z.infer<typeof SignupRequestCreateSchema>;

export class SignupRequestCreate extends createZodDto(
  SignupRequestCreateSchema,
) {}
