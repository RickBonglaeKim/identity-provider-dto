import { MemberDetailRequestCreateSchema } from 'dto/interface/member.detail/request/member.detail.request.create.dto';
import { MemberRequestCreateSchema } from 'dto/interface/member/request/member.request.create.dto';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const SignUpRequestCreateSchema = z.object({
  passport: z.string().length(64).optional(), // if the passport exist, this IPD system will return token to issue authorization code.
  member: MemberRequestCreateSchema,
  memberDetail: MemberDetailRequestCreateSchema,
});

export type SignUpRequestCreateType = z.infer<typeof SignUpRequestCreateSchema>;

export class SignUpRequestCreate extends createZodDto(
  SignUpRequestCreateSchema,
) {}
