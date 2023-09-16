import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TableDisplay from "../components/TableDisplay";

const CareerList = () => {
  const { careerdata } = useSelector((state) => state.career);
  const navigate = useNavigate();

  const dataWithIndex = careerdata?.map((item, index) => ({
    index: index + 1, // Add the index (position)
    id: item.id,
    ...item, // Include other data properties
  }));
  const columns = [
    { key: "index", header: "Serial no" },
    { key: "title", header: "Title" },
    { key: "location", header: "Location" },
  ];

  const handleTitleClick = (id) => {
      navigate(`/careers/${id}`);
  };

  return (
    <TableDisplay
    isCareer={true}
      data={dataWithIndex}
      columns={columns}
      label={"Add Career"}
      route={"/createCareer"}
      handleClick={handleTitleClick}
      editRoute="/updateCareer" 
    />
  );
};

export default CareerList;
