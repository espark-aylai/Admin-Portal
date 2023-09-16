import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Flex,
  HStack,
  Heading,
  Text,
  flexbox,
} from "@chakra-ui/react";
import DOMPurify from "dompurify";

const BlogDetail = () => {
  const { id } = useParams();
  const { data } = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  // const [excerpt, setExcerpt] = useState("");

  const singlePost = data?.filter((item) => item?.id == id);
  console.log(singlePost);

  return (
    <>
      <Card h="100vh">
        <CardHeader textAlign="center">
          <Text fontWeight='bold' fontSize='30' color='#3359a2' my='10'>{singlePost[0]?.title}</Text>
        </CardHeader>

        <CardBody>
          <Flex >
            <Text color="teal.600" fontWeight='700' >Quick summary of blog : </Text>
            <Text pl='10' fontWeight="normal"> {singlePost[0]?.excerpt}</Text>
          </Flex>

          <Text mt='10'
            textAlign="start"
            fontWeight="normal"
            dangerouslySetInnerHTML={{
              __html: DOMPurify?.sanitize(singlePost[0]?.content),
            }}
          ></Text>

          <Text>
            {singlePost[0]?.createDate}
          </Text>
        </CardBody>
      </Card>
    </>
  );
};

export default BlogDetail;
