import React from "react";
import Button from "@mui/material/Button";
import { Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PolicyIcon from "@mui/icons-material/Policy";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { pink, yellow, blue } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "start",
  color: theme.palette.text.secondary,
}));

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ededed",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "start",
  color: theme.palette.text.secondary,
}));

const LeftSidebar = ({ user }) => {
  return (
    <div>
      {!user && (
        <Item className="mb-2">
          <Typography className="text-black fw-bold" variant="h5">
            Our Community 👩‍💻👨‍💻 is a community of 996,347 amazing creaters and
            developers
          </Typography>

          <p>
            We're a place where Every creaters share, stay up-to-date and grow
            their careers.
          </p>
          <Button href="/signup" className="mx-3" variant="outlined">
            Create Account
          </Button>
          <Button href="/login" variant="contained">
            Login
          </Button>
        </Item>
      )}

      <Item2 elevation={0}>
        <HomeIcon className="mx-2" color="secondary" />
        <Link underline="none" href="/">
          Home
        </Link>
      </Item2>
      <Item2 elevation={0}>
        <PermIdentityIcon className="mx-2" color="success" />
        <Link underline="none" href="/about">
          About
        </Link>
      </Item2>
      <Item2 elevation={0}>
        <PhoneIcon className="mx-2" color="primary" />
        Contact
      </Item2>

      <Typography className="m-2 fw-bold" variant="subtitle1">
        Others
      </Typography>

      <Item2 elevation={0}>
        <PolicyIcon className="mx-2" sx={{ color: pink[500] }} /> Privacy Policy
      </Item2>
      <Item2 elevation={0}>
        <HelpCenterIcon className="mx-2" sx={{ color: yellow[900] }} />
        Terms of use
      </Item2>

      <Item2 className="" elevation={0}>
        <TwitterIcon className="mx-3" fontSize="large" color="primary" />
        <FacebookIcon
          fontSize="large"
          className="mx-3"
          sx={{ color: blue[800] }}
        />
        <GitHubIcon fontSize="large" className="mx-4" color="" />
        <InstagramIcon fontSize="large" sx={{ color: pink[600] }} />
      </Item2>
    </div>
  );
};

export default LeftSidebar;
