import React, { useEffect, useState } from "react";
// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import {
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { fatchBlogById } from "../Services/api";

import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";

import parse from "html-react-parser";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

function BlogPostView() {
  const { id } = useParams();
  const [blog, setBlog] = useState();
  useEffect(() => {
    fatchBlogById(id).then((data) => {
      setBlog(data.data.data);
    });
  }, [id]);

  const defaultImage =
    "https://images.unsplash.com/photo-1674240568812-d7481f3699a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80";

  return (
    <div className="container mt-3">
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <IconButton sx={{ "&:hover": { color: "red" } }}>
            <ThumbUpRoundedIcon />
          </IconButton>
          <p className="ms-3">4</p>

          <IconButton sx={{ "&:hover": { color: "blue" } }}>
            <ForumRoundedIcon />
          </IconButton>
          <p className="ms-3">3</p>
        </Grid>

        <Grid item xs={8}>
          <Card>
            <CardMedia
              component="img"
              height="194"
              // image= {blogs[0].imgUrl}

              image={blog?.image !== undefined ? blog.image : defaultImage}
              alt={blog?.title}
            />
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {blog?.author_image?.length > 0 ? (
                    <Avatar alt={blog?.author_name} src={blog?.author_image} />
                  ) : (
                    blog?.auther_name[0]
                  )}
                </Avatar>
              }
              title={blog?.author_name}
              subheader={
                "Last edited on: " +
                blog?.updated_at.toString().substring(0, 10)
              }
            />
            <Typography variant="h4" className="mx-4">
              {blog?.title}
            </Typography>

            <Typography variant="h6" className="mx-5 my-3">
              {parse("<div>" + blog?.content + "</div>")}
            </Typography>
          </Card>
        </Grid>

        {/* <Grid item xs={3}>
          <Item>xs=6 md=8</Item>
        </Grid> */}
      </Grid>
    </div>
  );
}

export default BlogPostView;
