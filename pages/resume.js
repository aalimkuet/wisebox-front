import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import * as React from "react";
import styles from "../styles/site.module.css";
import AddIcon from "@mui/icons-material/Add";
import core from "../src/images/NET_Core_Logo.png";
import html from "../src/images/html.png";
import css from "../src/images/css.png";
import react from "../src/images/React-icon.png";
import asp1 from "../src/images/asp-net-mvc.png";
import sqlServer from "../src/images/microsoft-sql-server-logo.svg";
import js from "../src/images/javascript.png";
import jquery from "../src/images/jquery.png";
import git from "../src/images/git.png";
import jira from "../src/images/jira.png";
import csharp from "../src/images/csharp.png";
import slack from "../src/images/slack.png";
import asp from "../src/images/asp.png";

import Image from "next/image";

export const getStaticProps = async () => {
  return {
    props: { todo: {} },
  };
};

export default function Dashboard({ todo }) {
  React.useEffect(() => {
    //console.log(todo);
  }, []);
  var cs = { width: "50px" };
  return (
    <>
      <Box mt={0.5} backgroundColor="#F4F5F6" width={"100%"}>
        <Card
          sx={{
            width: { md: "1128px", xs: "100%" },
            height: { md: "50rem", xs: "50rem" },
            ml: { md: 25, xs: 0 },
            borderRadius: "8px",
          }}
        >
          <CardContent sx={{ backgroundColor: "#24336A", height: "200px" }}>
            <Stack pl={3} pt={1} direction="row" spacing="30px">
              <Box style={cs}>
                <Image src={csharp} style={{ width: "100%" }} alt="" />
              </Box>
              <Box style={cs}>
                <Image src={core} style={{ width: "100%" }} alt="" />
              </Box>
              <Box style={cs}>
                <Image src={asp} style={{ width: "100%" }} alt="" />
              </Box>
              <Box style={cs}>
                <Image src={sqlServer} style={{ width: "100%" }} alt="" />
              </Box>

              <Box style={cs}>
                <Image src={js} style={{ width: "100%" }} alt="" />
              </Box>
              <Box style={cs}>
                <Image src={react} style={{ width: "100%" }} alt="" />
              </Box>
            </Stack>
            <Stack pl={3} mt={3} direction="row" spacing={"30px"}>
              <Box style={cs}>
                <Image src={html} style={{ width: "100%" }} alt="" />
              </Box>
              <Box style={cs}>
                <Image src={css} style={{ width: "100%" }} alt="" />
              </Box>
              <Box style={cs}>
                <Image src={jquery} style={{ width: "100%" }} alt="" />
              </Box>
              <Box style={cs}>
                <Image src={git} style={{ width: "100%" }} alt="" />
              </Box>
              <Box style={cs}>
                <Image src={jira} style={{ width: "100%" }} alt="" />
              </Box>
              <Box style={cs}>
                <Image src={slack} style={{ width: "100%" }} alt="" />
              </Box>
            </Stack>
            <Grid container spacing={1}>
              <Grid item md={1} xs={1}></Grid>
              <Grid item md={9} xs={9}>
                {" "}
              </Grid>
              <Grid item md={2} xs={2}></Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
