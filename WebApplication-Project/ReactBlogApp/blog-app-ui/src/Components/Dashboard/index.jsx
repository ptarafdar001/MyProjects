import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import BasicCard from "./BasicCard";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Row, Col } from "react-bootstrap";

import { styled } from "@mui/material/styles";
import { fetchBlogPosts } from "../../Services/api";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "start",
  color: theme.palette.text.secondary,
}));

function Dashboard() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogPosts().then((data) => {
      console.log("API DATA", data.data.data);
      setBlogs(data.data.data);
    });
  }, []);

  return (
    <Container fixed>
      <Typography className="mt-3 mb-3 ft-bold" variant="h4">
        Dashboard
      </Typography>

      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 3">
          <Item>
            <Typography className="fw-bold" variant="h4">
              <span className="text-black">0</span>
            </Typography>
            Total post reactions
          </Item>
        </Box>
        <Box gridColumn="span 3">
          <Item>
            <Typography className="fw-bold" variant="h4">
              <span className="text-black"> &lt; 500</span>
            </Typography>
            Total post views
          </Item>
        </Box>

        <Box gridColumn="span 6"></Box>

        <Box gridColumn="span 3">
          <Item className="mt-1">
            <Row>
              <Col xs={6}>
                <span>Posts</span>
              </Col>
              <Col xs={6}>
                <span className="px-5">{blogs.length}</span>
              </Col>
            </Row>
          </Item>
          <Item className="mt-1">
            <Row>
              <Col xs={6}>
                <span>Followers</span>
              </Col>
              <Col xs={6}>
                <span className="px-5">0</span>
              </Col>
            </Row>
          </Item>
          <Item className="mt-1">
            <Row>
              <Col xs={6}>
                <span>Following tags</span>
              </Col>
              <Col xs={6}>
                <span className="px-5">0</span>
              </Col>
            </Row>
          </Item>
          <Item className="mt-1">
            <Row>
              <Col xs={6}>
                <span>Following users</span>
              </Col>
              <Col xs={6}>
                <span className="px-5">0</span>
              </Col>
            </Row>
          </Item>
        </Box>

        <Box gridColumn="span 9">
          <Typography className="mt-2 mb-3 fw-bold" variant="h6">
            Posts
          </Typography>
          {blogs.map((blog, index) => (
            <BasicCard blog={blog} key={index} />
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default Dashboard;
