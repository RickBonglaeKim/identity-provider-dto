const HTTP_ERROR_MESSAGE = {
  PASSPORT_NOT_FOUND: 'The passport was not found',
  MEMBER_NOT_FOUND: 'The member was not found',
  USER_NOT_FOUND: 'The user was not found',
  COOKIE_NOT_FOUND: 'The cookie was not found',
  PASSWORD_TOKEN_NOT_FOUND: 'The password token to reset was not found',
  VERIFICATION_CODE_NOT_FOUND: 'The verification code was not found',

  MEMBER_KEY_NOT_CREATED: 'The member key was not created',

  PASSWORD_TOKEN_WAS_NOT_GENERATED: 'The password token was not generated',
  PASSWORD_TOKEN_WAS_NOT_REMOVED: 'The password token was not removed',

  VERIFICATION_CODE_NOT_GENERATED: 'The verification code was not generated',
  PASSWORD_NOT_UPDATED: 'The password was not updated',
} as const;

export default HTTP_ERROR_MESSAGE;
