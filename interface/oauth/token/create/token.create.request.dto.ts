import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const TokenCreateRequestRequestSchema = z.object({
  client_id: z.string().length(32),
  client_secret: z.string().length(64),
  redirect_uri: z.string().url(),
  grant_type: z.literal('authorization_code'),
  code: z.string().length(32),
});

export type TokenCreateRequestRequestType = z.infer<
  typeof TokenCreateRequestRequestSchema
>;

export class TokenCreateRequest extends createZodDto(
  TokenCreateRequestRequestSchema,
) {}
