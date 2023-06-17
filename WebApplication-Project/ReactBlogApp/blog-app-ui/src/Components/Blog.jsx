import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import BlogPosts from "./BlogPosts";
import Link from "@mui/material/Link";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const buttonSx = {
  "margin-top": "5px",
  "&:hover": {
    border: "1px solid #79d0e2",
    color: "#2ca4c8",
  },
};

const titleSx = {
  "&:hover": {
    color: "#0b64c5",
  },
};

const Blog = ({ blogs }) => {
  console.log(blogs);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card>
        <CardMedia
          component="img"
          height="194"
          image={blogs[0]?.image}
          //image="https://images.unsplash.com/photo-1674240568812-d7481f3699a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
          alt={blogs[0]?.title}
        />

        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {blogs[0]?.author_image.length > 0 ? (
                <Avatar
                  alt={blogs[0]?.author_name}
                  src={blogs[0]?.author_image}
                />
              ) : (
                blogs[0]?.auther_name[0]
              )}
            </Avatar>
          }
          title={blogs[0]?.author_name}
          subheader={
            "Posted on: " + blogs[0]?.created_at.toString().substring(0, 10)
          }
        />

        <CardContent>
          <Typography sx={titleSx} variant="h4" color="text.primary">
            <span className="mx-5">
              <Link
                color="black"
                className="text-center"
                underline="none"
                href={"/blog/" + blogs[0]?._id}
              >
                {blogs[0]?.title}
              </Link>
            </span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span className="mx-5">
              {blogs[0]?.tags?.map((tag, index) => (
                <Button
                  className="p-1 rounded"
                  sx={buttonSx}
                  variant="undefined"
                  key={index}
                >
                  {tag}
                </Button>
              ))}
            </span>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {blogs[0]?.content.substring(0, 300)}{" "}
              {blogs[0]?.content.length > 300 ? "..." : ""}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      <div className="mt-2">
        {blogs.slice(1, blogs.length).map((blog) => (
          <BlogPosts blog={blog} key={blog._id} />
        ))}
      </div>
    </>
  );
};

export default Blog;
