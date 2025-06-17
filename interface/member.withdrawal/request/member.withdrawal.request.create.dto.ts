import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';
import { WITHDRAWAL_REASON } from 'dto/enum/withdrawal.reason.enum';

export const MemberWithdrawalRequestCreateSchema = z.object({
  withdrawalReason: z.nativeEnum(WITHDRAWAL_REASON),
  reasonExplanation: z.string().optional(),
});

export type MemberWithdrawalRequestCreateType = z.infer<
  typeof MemberWithdrawalRequestCreateSchema
>;

export class MemberWithdrawalRequestCreate extends createZodDto(
  MemberWithdrawalRequestCreateSchema,
) {}
