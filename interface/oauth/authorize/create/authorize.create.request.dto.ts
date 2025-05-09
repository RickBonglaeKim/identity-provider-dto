import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const AuthorizeCreateRequestSchema = z.object({
  client_id: z.string().length(32),
  client_secret: z.string().length(64),
  redirect_uri: z.string().url(),
  response_type: z.literal('code'),
  scope: z.string(),
  state: z.string().optional(),
  nonce: z.string().optional(),
  sign_url: z.string().url().optional(),
});

export type AuthorizeCreateRequestType = z.infer<
  typeof AuthorizeCreateRequestSchema
>;

export class AuthorizeCreateRequest extends createZodDto(
  AuthorizeCreateRequestSchema,
) {}
