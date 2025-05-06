import { MemberDetailCreateRequestSchema } from 'dto/interface/member.detail/create/member.detail.create.request.dto';
import { MemberCreateRequestSchema } from 'dto/interface/member/create/member.create.request.dto';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const SignupCreateRequestSchema = z.object({
  member: MemberCreateRequestSchema,
  memberDetail: MemberDetailCreateRequestSchema,
});

export type SignupCreateRequestType = z.infer<typeof SignupCreateRequestSchema>;

export class SignupCreateRequest extends createZodDto(
  SignupCreateRequestSchema,
) {}
