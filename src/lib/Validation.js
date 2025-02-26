import { useMemo } from 'react';
import { z } from 'zod';
import useStore from '../store/useStore';



export const useLoginSchema = () => {
  const language = useStore((state) => state.language);

  const schemaLogin = useMemo(() => {
    return z.object({
      email: z.string().email({
        message: language.EmailError,
      }),
      password: z.string().min(6, {
        message: language.PasswordError,
      }),
    });
  }, [language]);


  const schemaForgetPassword = useMemo(() => {
    return z.object({
      email: z.string().email({
        message: language.EmailError
      }),
    });
  }, [language])

  const schemaResetPassword = useMemo(() => {
    return z
      .object({
        newPassword: z.string().min(6, {
          message: language.PasswordError,
        }),
        confirmPassword: z.string().min(6, {
          message: language.ConfirmPasswordError,
        }),
      })
      .refine((data) => data.newPassword === data.confirmPassword, {
        message: language.ConfirmPasswordErr,
        path: ["confirmPassword"],
      });
  }, [language]);

  const schemaSignUp = useMemo(() => {
    return z
      .object({
        email: z.string().email({
          message: language.EmailError,
        }),
        createPassword: z.string().min(6, {
          message: language.PasswordError,
        }),
        confirmPassword: z.string().min(6, {
          message: language.ConfirmPasswordError,
        }),
      })
      .refine((data) => data.createPassword === data.confirmPassword, {
        message: language.ConfirmPasswordErr,
        path: ["confirmPassword"],
      });
  }, [language]);


  const schemaProfile = useMemo(() => {
    return z.object({
      firstName: z.string().min(2, {
        message: language.FirstNameError,
      }),
      lastName: z.string().min(1, {
        message: language.LastNameError,
      }),
      nickName: z.string().min(1, {
        message: language.NickNameError,
      }),
      birthday: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
        message: language.BirthdayError,
      }),
      gender: z.enum(["male", "female"], {
        message: language.GenderError,
      }),
      streed: z.string().min(2, {
        message: language.AddressError,
      }),
      city: z.string().min(2, {
        message: language.CityError,
      }),
      zipCode: z.string().min(2, {
        message: language.ZipCodeError,
      })
    });
  }, [language]);



  return { schemaLogin, schemaForgetPassword, schemaResetPassword, schemaSignUp, schemaProfile };
};



