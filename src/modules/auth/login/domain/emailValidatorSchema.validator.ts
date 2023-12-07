import { z } from 'zod';

export const emailValidatorSchema = z
  .string()
  .email({ message: 'Invalid email address' });
