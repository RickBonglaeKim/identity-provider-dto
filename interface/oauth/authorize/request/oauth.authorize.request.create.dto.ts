import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const OauthAuthorizeRequestCreateSchema = z.object({
  client_id: z.string().length(32),
  redirect_uri: z.string().url(),
  response_type: z.literal('code'),
  scope: z.string(),
  state: z.string().optional(),
  nonce: z.string().optional(),
  sign_url: z.string().url().optional(),
});

export type OauthAuthorizeRequestCreateType = z.infer<
  typeof OauthAuthorizeRequestCreateSchema
>;

export class OauthAuthorizeRequestCreate extends createZodDto(
  OauthAuthorizeRequestCreateSchema,
) {}
