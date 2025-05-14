import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const ClientResponseSchema = z.object({
  id: z.number(),
  clientId: z.string(),
  clientSecret: z.string(),
  name: z.string(),
});

export type ClientResponseType = z.infer<typeof ClientResponseSchema>;

export class ClientResponse extends createZodDto(ClientResponseSchema) {
  constructor(
    id: number,
    clientId: string,
    clientSecret: string,
    name: string,
  ) {
    super();
    this.id = id;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.name = name;
  }
}
