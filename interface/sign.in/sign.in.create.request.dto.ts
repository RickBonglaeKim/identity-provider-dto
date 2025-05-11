import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const SigninCreateRequestSchema = z.object({
  passport: z.string().length(64),
  email: z.string().email(),
  password: z.string(),
});

export type SigninCreateRequestType = z.infer<typeof SigninCreateRequestSchema>;

export class SigninCreateRequest extends createZodDto(
  SigninCreateRequestSchema,
) {}
