import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import LinkA from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import logo from "../src/images/wisebox-logo.png";
import wisebox from "../src/images/Wisebox.png";
import Image from "next/image";
import { useFormik } from "formik";
import { signInSchema } from "../src/validation-schemas/change-password";
import Link from "next/link";
import Router from "next/router";
import { useSnackbar } from "notistack";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default function SignInSide() {
  // const { enqueueSnackbar } = useSnackbar();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: async (values) => {
      console.log(values);
      // enqueueSnackbar("Successfully signed in!", {
      //   variant: "success",
      // });
      Router.push("/dashboard");
      //   try {
      //     setSaving(true);
      //     let body = new FormData();
      //     Object.keys(values).forEach((k) => {
      //       body.append(k, values[k]);
      //     });
      //     const res = await fetch(ApiRoutes.signin, {
      //       method: "POST",
      //       body: body,
      //     });
      //     const data = await res.json();
      //     if (!data.status.status) throw new Error(data.status.msg);
      //     const user = data.user[0];
      //     dispatch(setUser(user));
      //     enqueueSnackbar("Successfully signed in!", {
      //       variant: "success",
      //     });
      //     navigate(
      //       `/dashboard/${user.is_investor === "1" ? "investor" : "investee"}`
      //     );
      //     if (nextAction === "meeting") {
      //       dispatch(openMeetingDialog());
      //     }
      //     dispatch(close());
      //   } catch (e) {
      //     console.log(e);
      //     enqueueSnackbar(e.message, {
      //       variant: "error",
      //     });
      //   } finally {
      //     setSaving(false);
      //   }
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
        <Grid mt={7} item xs={12} sm={8} md={8}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
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
            <Box mt={1}>
              <Typography
                component="h6"
                variant="subtitle2"
                sx={{
                  color: "#3772FF",
                  fontFamily: "Arial;",
                  fontWeight: "500",
                  borderBottom: "2px solid #E6E8EC",
                }}
              >
                LOGIN
              </Typography>
            </Box>
            <Box
              mt={2}
              component="form"
              onSubmit={formik.handleSubmit}
              noValidate
            >
              <TextField
                margin="normal"
                fullWidth
                id="email"
                label="EMAIL"
                variant="outlined"
                {...formik.getFieldProps("email")}
                error={hasError("email")}
                helperText={getError("email")}
              />
              <TextField
                margin="normal"
                fullWidth
                label="PASSWORD"
                type="password"
                id="txtPassword"
                autoComplete="password"
                variant="outlined"
                {...formik.getFieldProps("password")}
                error={hasError("password")}
                helperText={getError("password")}
              />
              <div>
                {/* <UnStyledLink
                  to="/forgot-password"
                  sx={{
                    float: "right",
                    textDecoration: "underline",
                    mt: 1,
                  }}
                >
                  Forgot password
                </UnStyledLink> */}
              </div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={false}
                sx={{ borderRadius: "20px", height: "40px", marginTop: "13px" }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item md={6} xs={6}>
                  <Typography fontWeight={"600"}>
                    Don't have an account?
                  </Typography>
                </Grid>
                <Grid item md={6} xs={6} sx={{ textAlign: "center" }}>
                  <Link href="/signup">
                    <span
                      style={{
                        fontWeight: "700",
                        fontSize: "17px",
                        color: "#3772FF",
                        "&:hover": {
                          color: "#000",
                        },
                      }}
                    >
                      Signup for free
                    </span>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
