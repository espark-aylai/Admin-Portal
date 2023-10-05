import {
  Box,
  Button,
  Divider,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import DOMPurify from "dompurify";
import JoditEditor from "jodit-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { EditIcon } from "@chakra-ui/icons";
import { editCareer } from "./careerSlice";
import DisplayDetail from "../../components/DisplayDetails";

const CareerDetails = () => {
  const { id } = useParams();
  const { careerdata } = useSelector((state) => state.career);
  const dispatch = useDispatch();

  const JobInfo = careerdata?.filter((item) => item?.id == id);

  const [isEditable, setIsEditable] = useState(false);
  const [editedFields, setEditedFields] = useState({
    title: JobInfo[0]?.title || "",
    description: JobInfo[0]?.content || "",
    location: JobInfo[0]?.location || "",
    responsibility: JobInfo[0]?.responsibility || "",
  });

  return (
    <>
      <DisplayDetail
        isCareer={true}
        id={id}
        data={careerdata}
        editAction={editCareer}
        titleField="title"
        contentField="content"
        locationField="location"
        responsibilityField="responsibility"
      />
    </>
  );
};

export default CareerDetails;
