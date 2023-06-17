import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
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

const BlogPosts = ({ blog }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card className="my-2">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {blog?.author_image.length > 0 ? (
                <Avatar alt={blog?.author_name} src={blog?.author_image} />
              ) : (
                blog?.auther_name[0]
              )}
            </Avatar>
          }
          title={blog?.author_name}
          subheader={
            "Posted on: " + blog?.created_at.toString().substring(0, 10)
          }
        />

        <CardContent>
          <Typography sx={titleSx} variant="h5" color="text.primary">
            <span className="px-5">
              <Link
                className="text-center"
                underline="none"
                href={"/blog/" + blog._id}
              >
                {blog?.title}
              </Link>
            </span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span className="mx-5">
              {blog?.tags?.map((tag, index) => (
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
              {blog.content.substring(0, 300)}{" "}
              {blog.content.length > 300 ? "..." : ""}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};

export default BlogPosts;
