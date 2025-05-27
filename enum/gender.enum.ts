export const GENDER = {
  FEMALE: 'GENDER.FEMALE',
  MALE: 'GENDER.MALE',
} as const;

export type Genders = (typeof GENDER)[keyof typeof GENDER];
