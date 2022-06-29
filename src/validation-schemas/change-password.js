import * as Yup from "yup";

export const passwordChangeSchema = Yup.object({
  currentPassword: Yup.string().label('Current Password').required(),
  password: Yup.string()
    .label("Password")
    .required()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Minimum eight characters, at least one letter, one number and one special character "
    ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export const signInSchema = Yup.object({
  email: Yup.string().label("Email").required(),
  password: Yup.string().label("Password").required(),
});

