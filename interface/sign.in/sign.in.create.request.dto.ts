import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const SignInCreateRequestSchema = z.object({
  passport: z.string().length(32),
  email: z.string().email(),
  password: z.string(),
});

export type SignInCreateRequestType = z.infer<typeof SignInCreateRequestSchema>;

export class SignInCreateRequest extends createZodDto(
  SignInCreateRequestSchema,
) {}
