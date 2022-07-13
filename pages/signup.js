import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import logo from "../src/images/wisebox-logo.png";
import wisebox from "../src/images/Wisebox.png";
import Image from "next/image";
import { useFormik } from "formik";
import { signupSchema } from "../src/validation-schemas/signup";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ApiRoute from "../src/api-routes";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
export const getStaticProps = async () => {
  // const res = await fetch(ApiRoute.countryList);
  const countryList = [{}]; //await res.json();
  return { props: { countryList } };
};

export default function SignInSide({ countryList }) {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      country: "",
      city: "",
      state: "",
      phoneCode: "",
      phone: "",
      email: "",
      email: "",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      console.log(values);
      // enqueueSnackbar("Successfully signed in!", {
      //   variant: "success",
      // });
      //Router.push("/dashboard");
      try {
        //setSaving(true);
        let body = new FormData();
        Object.keys(values).forEach((k) => {
          body.append(k, values[k]);
        });
        const res = await fetch(ApiRoute.signup, {
          method: "POST",
          body: body,
        });
        const data = await res.json();
      } catch (e) {
        console.log(e);
        enqueueSnackbar(e.message, {
          variant: "error",
        });
      } finally {
      }
    },
  });
  const hasError = (field) => {
    return formik.touched[field] && Boolean(formik.errors[field]);
  };
  const getError = (field) => {
    return formik.touched[field] && formik.errors[field];
  };

  return (
    <Box>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={4}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box sx={{ marginTop: "10%" }}>
            <Typography
              component="h6"
              variant="subtitle2"
              sx={{
                color: "#fff",
                fontSize: "17px",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              Manage asset in Bangladesh
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "24px",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              WITH CONFIDENCE
            </Typography>
          </Box>
          <Box sx={{ bottom: 0, position: "fixed", padding: "10%" }}>
            <Typography
              component="h6"
              variant="subtitle2"
              sx={{
                color: "#fff",
                fontSize: "17px",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              Photo by- www.unsplash.com
            </Typography>
          </Box>
        </Grid>
        <Grid mt={5} item xs={12} sm={8} md={8}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                maxWidth: "80.85px",
              }}
              to="/"
            >
              <Image src={logo} alt="logo" style={{ width: "100%" }} />
            </Box>
            <Box
              sx={{
                marginTop: "0.5em",
                maxWidth: "100px",
              }}
              to="/"
            >
              <Image src={wisebox} alt="logo" style={{ width: "100%" }} />
            </Box>
            <Typography
              component="h6"
              variant="subtitle2"
              sx={{
                color: "#3772FF",
                fontFamily: "Arial",
                fontWeight: "500",
                borderBottom: "2px solid #E6E8EC",
              }}
            >
              SIGN UP
            </Typography>
            <Grid mt={5} container spacing={2}>
              <Grid
                sx={{
                  ml: {
                    md: 22,
                    xs: 0,
                  },
                }}
                item
                md={4}
                xs={12}
                sm={12}
                lg={4}
              >
                <TextField
                  margin="normal"
                  fullWidth
                  label="FIRST NAME"
                  type="text"
                  variant="outlined"
                  {...formik.getFieldProps("firstName")}
                  error={hasError("firstName")}
                  helperText={getError("firstName")}
                />
              </Grid>
              <Grid item md={4} xs={12} sm={12} lg={4}>
                <TextField
                  margin="normal"
                  fullWidth
                  label="LAST NAME"
                  type="text"
                  variant="outlined"
                  {...formik.getFieldProps("lastName")}
                  error={hasError("lastName")}
                  helperText={getError("lastName")}
                />
              </Grid>
              <Grid
                sx={{
                  ml: {
                    md: 22,
                    xs: 0,
                  },
                }}
                item
                md={8}
                xs={12}
                sm={12}
                lg={8}
              >
                <FormControl fullWidth>
                  <InputLabel>Country</InputLabel>
                  <Select {...formik.getFieldProps("country")}>
                    <MenuItem> Select Country</MenuItem>
                    {countryList.map((result) => (
                      <MenuItem
                        title={result.name}
                        value={result.name}
                        key={result.code}
                      >
                        {result.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {/* <TextField
                  margin="normal"
                  fullWidth
                  label="COUNTRY"
                  type="text"
                  variant="outlined"
                  {...formik.getFieldProps("country")}
                  error={hasError("country")}
                  helperText={getError("country")}
                /> */}
              </Grid>
              <Grid
                sx={{
                  ml: {
                    md: 22,
                    xs: 0,
                  },
                }}
                item
                md={4}
                xs={12}
                sm={12}
                lg={4}
              >
                <TextField
                  margin="normal"
                  fullWidth
                  label="CITY"
                  type="text"
                  variant="outlined"
                  {...formik.getFieldProps("city")}
                  error={hasError("city")}
                  helperText={getError("city")}
                />
              </Grid>
              <Grid item md={4} xs={12} sm={12} lg={4}>
                <TextField
                  margin="normal"
                  fullWidth
                  label="STATE/ PROVINCE"
                  type="text"
                  variant="outlined"
                  {...formik.getFieldProps("state")}
                  error={hasError("state")}
                  helperText={getError("state")}
                />
              </Grid>
              <Grid
                sx={{
                  ml: {
                    md: 22,
                    xs: 0,
                  },
                }}
                item
                md={4}
                xs={12}
                sm={12}
                lg={4}
              >
                <TextField
                  margin="normal"
                  fullWidth
                  label="EMAIL"
                  type="email"
                  variant="outlined"
                  {...formik.getFieldProps("email")}
                  error={hasError("email")}
                  helperText={getError("email")}
                />
              </Grid>
              <Grid mt={2} item md={2} xs={6} sm={6} lg={2}>
                <FormControl fullWidth>
                  <InputLabel>Code</InputLabel>
                  <Select {...formik.getFieldProps("phoneCode")}>
                    <MenuItem> Select Code</MenuItem>
                    {countryList.map((result) => (
                      <MenuItem
                        title={result.dial_code}
                        value={result.dial_code}
                        key={result.code}
                      >
                        {result.code + "(" + result.dial_code + ")"}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {/*                 
                <TextField
                  margin="normal"
                  fullWidth
                  label=""
                  type="text"
                  variant="outlined"
                  {...formik.getFieldProps("phoneCode")}
                  error={hasError("phoneCode")}
                  helperText={getError("phoneCode")}
                /> */}
              </Grid>
              <Grid item md={2} xs={6} sm={6} lg={2}>
                <TextField
                  margin="normal"
                  fullWidth
                  label="PHONE"
                  type="text"
                  variant="outlined"
                  {...formik.getFieldProps("phone")}
                  error={hasError("phone")}
                  helperText={getError("phone")}
                />
              </Grid>
              <Grid
                sx={{
                  ml: {
                    md: 22,
                    xs: 0,
                  },
                }}
                item
                md={8}
                xs={12}
                sm={12}
                lg={8}
              >
                <FormControl fullWidth variant="outlined">
                  <InputLabel fullWidth htmlFor="outlined-adornment-password">
                    PASSWORD
                  </InputLabel>
                  <OutlinedInput
                    type={showPassword ? "text" : "password"}
                    {...formik.getFieldProps("password")}
                    error={hasError("password")}
                    helperText={getError("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="PASSWORD"
                  />
                </FormControl>

                {/* <TextField
                  margin="normal"
                  fullWidth
                  label="PASSWORD"
                  type="password"
                  variant="outlined"
                  {...formik.getFieldProps("password")}
                  error={hasError("password")}
                  helperText={getError("password")}
                /><VisibilityOutlinedIcon/> */}
              </Grid>
              <Grid
                sx={{
                  ml: {
                    md: 22,
                    xs: 0,
                  },
                }}
                item
                md={8}
                xs={12}
                sm={12}
                lg={8}
              >
                <TextField
                  margin="normal"
                  fullWidth
                  label="CONFIRM PASSWORD"
                  type="password"
                  variant="outlined"
                  {...formik.getFieldProps("confirmPassword")}
                  error={hasError("confirmPassword")}
                  helperText={getError("confirmPassword")}
                />
              </Grid>
              <Grid
                sx={{
                  ml: {
                    md: 22,
                    xs: 0,
                  },
                }}
                item
                md={8}
                xs={12}
                sm={12}
                lg={8}
              >
                <Box mt={2} with="50px">
                  <Button
                    className="myBtn"
                    fullWidth
                    type="submit"
                    variant="contained"
                    sx={{ borderRadius: "20px", height: "40px" }}
                  >
                    Sign Up
                  </Button>
                </Box>
              </Grid>
              <Grid
                sx={{
                  ml: {
                    md: 37,
                    xs: 0,
                  },
                }}
                item
                md={3}
                xs={8}
                sm={8}
                lg={4}
              >
                <Typography fontWeight={"600"}>
                  Already have an account?
                </Typography>
              </Grid>
              <Grid item md={3} xs={2} sm={2} lg={2}>
                <Link href="/signin">
                  <Typography fontWeight={"600"}>Login</Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
