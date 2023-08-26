import * as z from 'zod';

export const UserSignUpSchema = z.object({
    firstName: z
      .string()
      .min(1, 'First name is required.')
      .min(2, 'First name must be at least 2 characters long.'),
    lastName: z
      .string()
      .min(1, 'Last name is required.')
      .min(2, 'Last name must be at least 2 characters long.'),
    email: z.string().email('Invalid email address.'),
    password: z.string().min(8, 'Password must be at least 8 characters long.'),
    termsAndPrivacy: z
      .boolean()
      .refine(
        val => val === true,
        'You must agree to the terms and privacy policy.',
      ),
});

export const UserLoginSchema = UserSignUpSchema.omit({
    firstName: true,
    lastName: true,
    termsAndPrivacy: true,
});