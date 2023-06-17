import { useEffect, useState, useRef } from "react";

import Paper from "@mui/material/Paper";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { EditBlogById, fatchBlogById } from "../Services/api";
import JoditEditor from "jodit-react";

export default function Edit({ user }) {
  const { id } = useParams();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const editor = useRef(null);

  useEffect(() => {
    fatchBlogById(id).then((data) => {
      setTitle(data.data.data.title);
      setContent(data.data.data.content);
    });
  }, [id]);

  const handelSubmit = (event) => {
    event.preventDefault();
    const data = {
      title: title,
      content: content,
    };
    EditBlogById(id, data).then((data) => {
      window.location.href = "/dashboard";
    });
  };

  return (
    <div>
      <Container maxWidth="md" className="m-5 bg-white mx-auto">
        <Paper elevation={0}>
          <Button className="m-5" variant="contained" component="label">
            Add a Cover Image
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Paper>

        <input
          type="text"
          placeholder="New post title here..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="ms-5 mb-5 fw-bold fs-1  border-0"
        />

        <div className="p-3">
          <JoditEditor
            ref={editor}
            value={content}
            //config={config}
            tabIndex={1} // tabIndex of textarea
            //onBlur={(newContent) => setContent()newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={(newContent) => setContent(newContent)}
          />
        </div>
        <Button className="m-3" variant="contained" onClick={handelSubmit}>
          Publish
        </Button>
      </Container>
    </div>
  );
}
