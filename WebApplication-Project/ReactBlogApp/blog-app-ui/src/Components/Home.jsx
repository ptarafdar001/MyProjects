import React from "react";
import Grid from "@mui/material/Grid";
import MainView from "./MainView";
import RightSidebar from "./RightSidebar";
import LeftSidebar from "./LeftSidebar";

const Home = ({ user, searchTerm }) => {
  return (
    <div className="container mt-3">
      <Grid container spacing={2}>
        <Grid item xs>
          <LeftSidebar user={user} />
        </Grid>

        <Grid item xs={6}>
          <MainView searchTerm={searchTerm} />
        </Grid>

        <Grid item xs>
          <RightSidebar />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
