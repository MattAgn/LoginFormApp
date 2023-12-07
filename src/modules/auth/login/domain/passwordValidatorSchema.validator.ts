import { z } from 'zod';

const oneNumberRegex = /.*\d.*$/;
const oneSymbolRegex = /.*[!@#$%^&*].*$/;
const oneUppercaseRegex = /.*[A-Z].*$/;
const oneLowercaseRegex = /.*[a-z].*$/;

export const messageMinCharactersError = 'At least 8 characters';

export const messageNumberError = 'At least 1 number';

export const messageSymbolError = 'At least 1 symbol';

export const messageUpperCaseError = 'At least 1 Uppercase letter';

export const messageLowercaseError = 'At least 1 Lowercase letter';

// TODO: remove the password validation you don't want
export const passwordValidatorSchema = z
  .string()
  .min(8, { message: messageMinCharactersError })
  .regex(oneNumberRegex, {
    message: messageNumberError,
  })
  .regex(oneSymbolRegex, {
    message: messageSymbolError,
  })
  .regex(oneUppercaseRegex, {
    message: messageUpperCaseError,
  })
  .regex(oneLowercaseRegex, {
    message: messageLowercaseError,
  });
