import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";
import Blog from "./Blog";
import { fetchBlogPosts } from "../Services/api";

const GrayButton = styled(Button)`
  color: #616161;
  font-weight: normal;
`;

const buttonSx = {
  "&:hover": {
    color: "blue",
    backgroundColor: "white",
  },
};

const MainView = ({ searchTerm }) => {
  const [blogs, setBlogs] = useState([]);
  const [blogData, setBlogData] = useState([]);

  // const searchBlog = () => {
  //   let searchResult = [];
  //   for (let i = 0; i <= blogs.length; i++) {
  //     if (blogs[i]?.title.toLowerCase().includes(searchTerm.toLowerCase())) {
  //       searchResult.push(blogs[i]);
  //     }
  //   }
  //   return searchResult;
  // };

  useEffect(() => {
    let searchResult = [];
    setBlogs(blogData);
    if (searchTerm.length > 0) {
      for (let i = 0; i <= blogs.length; i++) {
        if (blogs[i]?.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          searchResult.push(blogs[i]);
        }
      }
      setBlogs(searchResult);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBlogPosts().then((data) => {
      setBlogs(data.data.data);
      setBlogData(data.data.data);
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="d-flex">
        <GrayButton sx={buttonSx}>Latest</GrayButton>
        <GrayButton sx={buttonSx} className="mx-4">
          Top
        </GrayButton>
      </div>
      <div className="mb-5 mt-2">
        <Blog blogs={blogs} />
      </div>
    </div>
  );
};

export default MainView;
