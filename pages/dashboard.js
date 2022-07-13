import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import * as React from "react";
import styles from "../styles/site.module.css";
import AddIcon from "@mui/icons-material/Add";
import propertyIcon01 from "../src/images/Property Type-1.png";
import propertyIcon02 from "../src/images/Property Type-2.png";
import peelBadge01 from "../src/images/Peel Badge-1.png";
import peelBadge02 from "../src/images/Peel Badge-2.png";
import Image from "next/image";
import AppHeader from "../src/components/AppHeader";
import style from "../styles/site.module.css";
export const getStaticProps = async () => {
  //const result = await fetch("https://jsonplaceholder.typicode.com/users");
  //const data = await result.json();

  return {
    props: { todo: {} },
  };
};

export default function Dashboard({ todo }) {
  React.useEffect(() => {
    //console.log(todo);
  }, []);

  return (
    <>
      <AppHeader></AppHeader>
      <Box mt={0.5} backgroundColor="#F4F5F6" width={"100%"} height="700px">
        <Card>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Box ml="156px">
              <Typography variant="h4">Welcome Back Shadman</Typography>
            </Box>
            <Box mr="156px">
              <Button
                className={style.myBtn}
                variant="contained"
                type="submit"
                fullWidth
              >
                Add Property{" "}
                <span style={{ marginLeft: "7px", marginTop: "5px" }}>
                  <AddIcon sx={{ fontSize: "21px" }} />
                </span>
              </Button>
            </Box>
          </CardContent>
        </Card>

        <Box ml="176px" mt={4} mb={2}>
          <Typography variant="body2">Account Overview</Typography>
        </Box>
        <Card
          sx={{
            width: "78%",
            height: "120px",
            ml: "176px",
            borderRadius: "8px",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Grid container spacing={1}>
              <Grid item md={1} xs={1}>
                <Box pl={5}>
                  <Avatar sx={{ backgroundColor: "rgba(55, 114, 255, 0.1)" }}>
                    <Image src={propertyIcon01} style={{ width: "100%" }} />
                  </Avatar>
                </Box>
              </Grid>
              <Grid item md={9} xs={9}>
                {" "}
                <Box mt={1}>
                  <Typography
                    variant="body1"
                    fontWeight={"bold"}
                    color={"#3772FF"}
                  >
                    My Apartment in Baridhara DOHS
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={2} xs={2}>
                <Box
                  ml={7}
                  sx={{
                    maxWidth: "80.85px",
                  }}
                >
                  <Image src={peelBadge01} style={{ width: "80%" }} />
                </Box>
              </Grid>
              <Grid item md={8} xs={12}>
                <Box sx={{ pl: "95px" }}>
                  <Typography variant="caption" color="#353945">
                    3rd Floor, House 67, Road 14, Sector 7 Uttara Model Town,
                    Dhaka 1214
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card
          sx={{
            mt: "10px",
            width: "78%",
            height: "120px",
            ml: "176px",
            borderRadius: "8px",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Grid container spacing={1}>
              <Grid item md={1} xs={1}>
                <Box pl={5}>
                  <Avatar sx={{ backgroundColor: "rgba(55, 114, 255, 0.1)" }}>
                    <Image src={propertyIcon02} style={{ width: "100%" }} />
                  </Avatar>
                </Box>
              </Grid>
              <Grid item md={9} xs={9}>
                {" "}
                <Box mt={1}>
                  <Typography
                    variant="body1"
                    fontWeight={"bold"}
                    color={"#3772FF"}
                  >
                    My Plot in Purbanchal Model Town
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={2} xs={2}>
                <Box
                  ml={7}
                  sx={{
                    maxWidth: "80.85px",
                  }}
                >
                  <Image src={peelBadge02} style={{ width: "80%" }} />
                </Box>
              </Grid>
              <Grid item md={8} xs={12}>
                <Box sx={{ pl: "95px" }}>
                  <Typography variant="caption" color="#353945">
                    Plot 22, Sector 11, Purbanchal Model Town, Dhaka 1290
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
