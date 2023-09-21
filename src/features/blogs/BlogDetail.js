import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Divider,
  Flex,
  HStack,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
  flexbox,
} from "@chakra-ui/react";
import DOMPurify from "dompurify";
import { EditIcon } from "@chakra-ui/icons";
import { editBlog } from "./blogSlice";
import JoditEditor from "jodit-react";
import DisplayDetail from "../../components/DisplayDetails";


const BlogDetail = () => {
  const { id } = useParams();
  const { data } = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  const singlePost = data?.filter((item) => item?.id == id);
  console.log(singlePost);

  const [isEditable, setIsEditable] = useState(false);
  const [editedFields, setEditedFields] = useState({
    title: singlePost[0]?.title || "",
    content: singlePost[0]?.content || "",
    excerpt: singlePost[0]?.excerpt || "",
  });

  function handleEditChange() {
    dispatch(
      editBlog({
        id: singlePost[0]?.id,
        title: editedFields.title,
        content: editedFields.content,
        excerpt: editedFields.excerpt,
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
    // <VStack mt={5}>
    //   <Button
    //     py={5}
    //     color="#3359a2"
    //     position="fixed"
    //     right="5vw"
    //     onClick={() => setIsEditable(!isEditable)}
    //   >
    //     {isEditable ? "Cancel" : <EditIcon />}
    //   </Button>

    //   {isEditable ? (
    //     <Input
    //       my={20}
    //       type="text"
    //       name="title"
    //       value={editedFields.title}
    //       onChange={handleInputChange}
    //       onBlur={handleEditChange}
    //       placeholder="Title"
    //     />
    //   ) : (
    //     <Text my={10} contentEditable={isEditable ? true : false}>
    //       {editedFields.title}
    //     </Text>
    //   )}

    //   <Box textAlign="start">
    //     <Heading my="2" color="#3359a2" size={"md"}>
    //       Blog Content
    //     </Heading>
    //     {isEditable ? (
    //       <JoditEditor
    //         onChange={(content) => handleInputChange(content, "content")}
    //         value={editedFields.content}
    //         onBlur={() => handleEditChange("content")}
    //         name="content"
    //       />
    //     ) : (
    //       <Text
    //         dangerouslySetInnerHTML={{
    //           __html: DOMPurify?.sanitize(editedFields.content),
    //         }}
    //       ></Text>
    //     )}

    //     <Divider my={5} />

    //     <Heading my="2" color="#3359a2" size={"md"}>
    //       Blog Excerpt
    //     </Heading>
    //     {isEditable ? (
    //       <Textarea
    //         name="excerpt"
    //         value={editedFields.location}
    //         onChange={handleInputChange}
    //         onBlur={handleEditChange}
    //         placeholder="Location"
    //       />
    //     ) : (
    //       <Text contentEditable={isEditable ? true : false}>
    //         {editedFields.excerpt}
    //       </Text>
    //     )}
    //   </Box>
    // </VStack>

    <DisplayDetail

      id={id}
      data={data}
      editAction={editBlog}
      titleField="title"
      contentField="content"
      excerptField="excerpt"
    />



  );
};

export default BlogDetail;
