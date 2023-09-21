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

  function handleEditChange() {
    dispatch(
      editCareer({
        id: JobInfo[0]?.id,
        title: editedFields.title,
        content: editedFields.description,
        location: editedFields.location,
        responsibility: editedFields.responsibility,
      })
    );
    setIsEditable(false);
  }

  const handleInputChange = (event, fieldName) => {
    if (fieldName) {
      setEditedFields({
        ...editedFields,
        [fieldName]: event,
      });
    } else {
      const { name, value } = event.target;
      setEditedFields({
        ...editedFields,
        [name]: value,
      });
    }
  };

  return (
    <>
      {/* <VStack mt={5}>
      <Button
        py={5}
        color="#3359a2"
        position="fixed"
        right="5vw"
        onClick={() => setIsEditable(!isEditable)}
      >
        {isEditable ? "Cancel" : <EditIcon />}
      </Button>

      {/* <Divider my={5} /> */}
      {/* {isEditable ? (
        <Input
          my={20}
          type="text"
          name="title"
          value={editedFields.title}
          onChange={handleInputChange}
          onBlur={handleEditChange}
          placeholder="Title"
        />
      ) : (
        <Text my={10} contentEditable={isEditable ? true : false}>
          {editedFields.title}
        </Text>
      )}

      <Box textAlign="start">
        <Heading my="2" color="#3359a2" size={"md"}>
          Job Description
        </Heading>
        {isEditable ? (
          <JoditEditor
            onChange={(content) => handleInputChange(content, "description")}
            value={editedFields.description}
            onBlur={() => handleEditChange("description")}
            name="content"
          />
        ) : (
          <Text
            dangerouslySetInnerHTML={{
              __html: DOMPurify?.sanitize(editedFields.description),
            }}
          ></Text>
        )}

        <Divider my={5} />

        <Heading my="2" color="#3359a2" size={"md"}>
          Job Location
        </Heading>
        {isEditable ? (
          <Textarea
            name="location"
            value={editedFields.location}
            onChange={handleInputChange}
            onBlur={handleEditChange}
            placeholder="Location"
          />
        ) : (
          <Text contentEditable={isEditable ? true : false}>
            {editedFields.location}
          </Text>
        )}

        <Divider my={5} />

        <Heading color="#3359a2" size={"md"}>
          Job responsibility
        </Heading>

        {isEditable ? (
          <JoditEditor
            onChange={(responsibility) =>
              handleInputChange(responsibility, "responsibility")
            }
            value={editedFields.responsibility}
            onBlur={() => handleEditChange("responsibility")}
            name="responsibility"
          />
        ) : (
          <Text
            dangerouslySetInnerHTML={{
              __html: DOMPurify?.sanitize(editedFields.responsibility),
            }}
          ></Text>
        )}
      </Box> */}
      {/* </VStack> */} 

      <DisplayDetail
        isCareer={true}
        id={id}
        data={careerdata}
        editAction={editCareer}
        titleField="title"
       contentField= 'content'
        locationField="location"
        responsibilityField="responsibility"
      />
    </>
  );
};

export default CareerDetails;
