import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import TableDisplay from "../components/TableDisplay";

const BlogList = () => {
  const { data } = useSelector((state) => state.blog);
  const navigate = useNavigate();

  const dataWithIndex = data.map((item, index) => ({
    index: index + 1, // Add the index (position)
    id: item.id,
    ...item, // Include other data properties
  }));
  const columns = [
    { key: "index", header: "Serial no" },
    { key: "title", header: "Title" },
    { key: "excerpt", header: "excerpt" },
  ];

  const handleTitleClick = (id) => {
    // if (columns.key == "title") {
      navigate(`/blogs/${id}`);
    // }
  };

  return (
    <TableDisplay
      data={dataWithIndex}
      columns={columns}
      label={"Add blog"}
      route={"/createBlog"}
      handleClick={handleTitleClick}
      editRoute={"/updateBlog"}
    />
  );
};

export default BlogList;
