import { emailValidatorSchema } from '#modules/auth/login/domain/emailValidatorSchema.validator';
import { z } from 'zod';

export const loginFormValidator = () => {
  const loginValidatorSchema = z.object({
    email: emailValidatorSchema,
    password: z.string(),
  });

  return loginValidatorSchema;
};
