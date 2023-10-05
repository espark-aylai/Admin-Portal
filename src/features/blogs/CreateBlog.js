import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  Input,
  Button,
  VStack,
  HStack,
  RadioGroup,
  Radio,
  Text,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import JoditEditor from "jodit-react";
import toast from "react-hot-toast";
import { addBlog, editBlog } from "./blogSlice";
import { addCareer, editCareer } from "../career/careerSlice";
import { current } from "@reduxjs/toolkit";

const CreateBlog = ({ isCareer, label }) => {
  const editor = useRef(null);
  const { id } = useParams();
  const { data } = useSelector((state) => state?.blog);
  const { careerdata } = useSelector((state) => state?.career);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  const date = new Date();
  const formatedDate = date.toLocaleDateString('en-GB');

console.log(formatedDate)

  const [fields, setFields] = useState({
    title: "",
    content: "",
    excerpt: "",
    location: "",
    responsibility: "",
    jobType: "",
    createDate: formatedDate
  });

  useEffect(() => {
    const filterData = isCareer
      ? careerdata?.filter((item) => item?.id == id)
      : data?.filter((item) => item?.id == id);
    if (filterData[0]) {
      setFields({
        title: filterData[0]?.title,
        content: filterData[0]?.content,
        excerpt: filterData[0]?.excerpt,
        location: filterData[0]?.location || "",
        responsibility: filterData[0]?.responsibility || "",
        // jobType: filterData[0]?.jobType || ""
      });
    }
  }, [id, careerdata, data]);

  const handleFieldChange = (field, value) => {
    setFields((prevFields) => ({ ...prevFields, [field]: value }));
  };


  const handleUpdate = () => {
    dispatch(
      isCareer ? editCareer({ id, ...fields }) : editBlog({ id, ...fields })
    );
    navigate(isCareer ? "/careers" : "/");
  };

  const newItemId = uuidv4();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, content, excerpt, location, responsibility, jobType, createDate } =
      fields;

    if (!title) {
      toast.error("Title cannot be empty");
      return;
    }
    if (!content) {
      toast.error("Content cannot be empty");
      return;
    }

    // if (!excerpt) {
    //   toast.error("Excerpt cannot be empty");
    //   return;
    // }

    const newData = {
      id: newItemId,
      title,
      content,
      excerpt,
      location,
      responsibility,
      jobType,
      createDate,
    };

    if (isCareer) {
      dispatch(addCareer({ ...newData }));
    } else {
      dispatch(addBlog({ ...newData }));
      console.log(data?.length, "data length");
    }

    setFields({
      title: "",
      content: "",
      excerpt: "",
      location: "",
      responsibility: "",
      jobType: "",
      createDate: "",
    });

    console.log(date);
    toast.success("Entry added");

    navigate(isCareer ? "/careers" : "/blogs");
  };

  const [selectedJobType, setSelectedJobType] = useState("");

  const radioOptions = [
    { value: "partTime", label: "Part Time" },
    { value: "fullTime", label: "Full Time" },
    { value: "remote", label: "Remote" },
  ];

  const handleJobTypeChange = (value) => {
    setSelectedJobType(value);
  };

  return (
    <VStack spacing={4} align="flex-start" mx={10} my={10}>
      <HStack>
        <label>
          {" "}
          Title :
          <Input
            mb="2"
            value={fields.title}
            onChange={(e) => handleFieldChange("title", e.target.value)}
            // onChange={(e) => setFields.title(e.target.value)}
            placeholder="write Title here"
          />
        </label>
      </HStack>

      <HStack>
        <label>
          {" "}
          {`${isCareer ? "Job Detail" : "Blog Content"} `}
          <JoditEditor
            ref={editor}
            value={fields.content}
            onChange={(value) => handleFieldChange("content", value)}
          />
        </label>
      </HStack>

      {isCareer && (
        <HStack>
          <FormLabel>Job type :</FormLabel>

          <RadioGroup onChange={handleJobTypeChange} value={selectedJobType}>
            {radioOptions.map((option) => (
              <Radio mx={2} key={option.value} value={option.value}>
                {option.label}
              </Radio>
            ))}
          </RadioGroup>
        </HStack>
      )}

      <HStack pt={5}>
        <label>
          {" "}
          {`${isCareer ? "Job Location" : "Blog Summary"} `}
          <Textarea
            mt={2}
            value={isCareer ? fields.location : fields.excerpt}
            onChange={(e) =>
              handleFieldChange(
                isCareer ? "location" : "excerpt",
                e.target.value
              )
            }
            // placeholder="Excerpt"
          />
        </label>
      </HStack>
      {isCareer && (
        <HStack>
          <label>
            {" "}
            Job responsibility
            <JoditEditor
              ref={editor}
              value={fields.responsibility}
              onChange={(value) => handleFieldChange("responsibility", value)}
            />
          </label>
        </HStack>
      )}

      <Button onClick={id ? handleUpdate : handleSubmit} colorScheme="teal">
        {id
          ? `Update ${isCareer ? "career" : "Blog"}`
          : `Add ${isCareer ? "career" : "Blog"}`}
      </Button>
    </VStack>
  );
};

export default CreateBlog;
