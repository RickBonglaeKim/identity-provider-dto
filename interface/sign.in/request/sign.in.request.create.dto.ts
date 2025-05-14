import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const SigninRequestCreateSchema = z.object({
  passport: z.string().length(64),
  email: z.string().email(),
  password: z.string(),
});

export type SigninRequestCreateType = z.infer<typeof SigninRequestCreateSchema>;

export class SigninRequestCreate extends createZodDto(
  SigninRequestCreateSchema,
) {}
