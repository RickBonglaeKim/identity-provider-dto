import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const VerificationEmailRequestCreateSchema = z.object({
  // passport: z.string().length(64),
  email: z.string().email(),
});

export type VerificationEmailRequestCreateType = z.infer<
  typeof VerificationEmailRequestCreateSchema
>;

export class VerificationEmailRequestCreate extends createZodDto(
  VerificationEmailRequestCreateSchema,
) {}
