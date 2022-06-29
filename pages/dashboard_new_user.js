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
import Image from "next/image";

export default function DashboardNewUser() {
  return (
    <Box pt={5} backgroundColor="#F4F5F6" width={"100%"} height="700px">
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
            <Typography variant="h4" color="#353945">
              Welcome Shadman
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
