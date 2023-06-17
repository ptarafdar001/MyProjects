import { Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import React from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "start",
  color: theme.palette.text.secondary,
}));

const RightSidebar = () => {
  return (
    <div>
      <Typography className="mt-2 mb-3 fw-bold" variant="h5">
        Popular tags
      </Typography>
      <Item>
        <Typography className="fw-bold" variant="h6">
          #help
        </Typography>
        <Link href="#" color="inherit" underline="none">
          Blog Title Links
        </Link>
      </Item>
    </div>
  );
};

export default RightSidebar;
