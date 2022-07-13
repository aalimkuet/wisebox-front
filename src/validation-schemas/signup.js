import * as Yup from "yup";

export const signupSchema = Yup.object({
  firstName: Yup.string().label("First Name").required(),
  lastName: Yup.string().label("Last Name").required(),
  country: Yup.string().label("Country").required(),
  city: Yup.string().label("City").required(),
  // state: Yup.string().label("State").required(),
  email: Yup.string().label("Email").required(),
  phone: Yup.string().label("Phone").required(),
  password: Yup.string()
    .label("Password")
    .required()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/,
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
