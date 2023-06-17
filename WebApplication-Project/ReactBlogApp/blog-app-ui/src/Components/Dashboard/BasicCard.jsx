import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { pink } from "@mui/material/colors";
import Link from "@mui/material/Link";
import { deleteBlogById } from "../../Services/api";

export default function BasicCard({ blog, index }) {
  const handelDelete = (e) => {
    // e.preventDefault();
    deleteBlogById(blog._id).then((data) => {
      alert("Delete SuccessFull");
      window.location.href = "/dashboard";
    });
  };

  return (
    <Card
      sx={{ minWidth: 275 }}
      className="mb-2 d-flex justify-content-between"
    >
      <CardContent>
        <Typography variant="h5" color="primary" component="div">
          <Link
            color="inherit"
            className="text-center"
            underline="none"
            href={"/blog/" + blog._id}
          >
            {blog?.title}
          </Link>
        </Typography>
        <strong className="mx-3">Published On:</strong>
        {blog.created_at.toString().substring(0, 10)}
        <strong className="mx-5">Last Update On:</strong>
        {blog.updated_at.toString().substring(0, 10)}
      </CardContent>
      <CardActions>
        <Link href={"/editpost/" + blog._id}>
          <EditIcon color="secondary" />
        </Link>

        <DeleteIcon onClick={handelDelete} sx={{ color: pink[500] }} />
      </CardActions>
    </Card>
  );
}
