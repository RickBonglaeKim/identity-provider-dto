import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const SignInRequestCreateSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type SignInRequestCreateType = z.infer<typeof SignInRequestCreateSchema>;

export class SignInRequestCreate extends createZodDto(
  SignInRequestCreateSchema,
) {}
