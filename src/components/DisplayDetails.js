import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import { EditIcon } from "@chakra-ui/icons";


const DisplayDetail = ({id,data,editAction,titleField,contentField,locationField,responsibilityField,excerptField,isCareer,}) => {
  const dispatch = useDispatch();

  const item = data?.filter((item) => item?.id == id);

  const [isEditable, setIsEditable] = useState(false);
  const [editedFields, setEditedFields] = useState({
    title: item[0]?.[titleField] || "",
    content: item[0]?.[contentField] || "",
    location: item[0]?.[locationField] || "",
    excerpt: item[0]?.[excerptField] || "",
    responsibility: item[0]?.[responsibilityField] || "",
  });

  function handleEditChange() {
    const payload = {
      id: item[0]?.id,
      [titleField]: editedFields.title,
      [contentField]: editedFields.content,
      [locationField]: editedFields.location,
      [responsibilityField]: editedFields.responsibility,
      [excerptField]: editedFields.excerpt,
    };
    dispatch(editAction(payload));
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
    <VStack mt={5}>
      <Button
        py={5}
        color="#3359a2"
        position="fixed"
        right="5vw"
        onClick={() => setIsEditable(!isEditable)}
      >
        {isEditable ? "Cancel" : <EditIcon />}
      </Button>

      {isEditable ? (
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
        <Text my={10} color='#3359B5' fontWeight='700' contentEditable={isEditable ? true : false}>
          {editedFields.title}
        </Text>
      )}

      <Box textAlign="start">
        <Heading my="2" color="#3359a2" size={"md"}>
          {isCareer ? "Details" : "Blog Content"}
        </Heading>
        {isEditable ? (
          <JoditEditor
            onChange={(content) => handleInputChange(content, "content")}
            value={editedFields.content}
            onBlur={() => handleEditChange("content")}
            name="content"
          />
        ) : (
          <Text
            dangerouslySetInnerHTML={{
              __html: DOMPurify?.sanitize(editedFields.content),
            }}
          ></Text>
        )}

        <Divider my={5} />

        <Heading my="2" color="#3359a2" size={"md"}>
          {isCareer ? "Job Location" : "Blog Excerpt"}
        </Heading>
        {isEditable ? (
          <Textarea
            name={isCareer ? 'location' : 'excerpt'}
            value={isCareer ? editedFields.location : editedFields.excerpt}
            onChange={handleInputChange}
            onBlur={handleEditChange}
            placeholder={
              isCareer ? "write office location here" : "short summary"
            }
          />
        ) : (
          <Text contentEditable={isEditable ? true : false}>
            {isCareer ? editedFields.location : editedFields.excerpt}
          </Text>
        )}

        <Divider my={5} />
        {isCareer && (
          <>
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
          </>
        )}
      </Box>
    </VStack>
  );
};

export default DisplayDetail;
