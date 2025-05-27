export const DUPLICATION_TYPE = {
  NONE: 'DUPLICATION_TYPE.NONE',
  EMAIL: 'DUPLICATION_TYPE.EMAIL',
  PHONE: 'DUPLICATION_TYPE.PHONE',
} as const;

export type DuplicationTypes =
  (typeof DUPLICATION_TYPE)[keyof typeof DUPLICATION_TYPE];
