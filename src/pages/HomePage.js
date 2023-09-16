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
  Grid,
  GridItem,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Spacer,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import background from "../assets/white-bg.jpg";
import { UserData } from "../assets/Data";
import { useNavigate } from "react-router-dom";
import {
  FaArrowAltCircleRight,
  FaBriefcase,
  FaRegListAlt,
} from "react-icons/fa";
import BlogAreaChart from "../components/BlogAreaChart";
import CareerAreaChart from "../components/CareerChart";

const HomePage = () => {
  const { data } = useSelector((state) => state.blog);
  const { careerdata } = useSelector((state) => state.career);
  const navigate = useNavigate();
  const totalBlogs = data.length;
  const totalCareers = careerdata?.length;

  const recentBlogIndex = data.length - 1;
  const recentBlog = data[recentBlogIndex]?.title;
  const recentCareerIndex = careerdata.length - 1;
  const recentCareer = careerdata[recentCareerIndex]?.title;

  console.log(recentBlog);
  console.log(recentCareer);

  function handleClick(name) {
    if (name == "blog") {
      navigate("/createBlog");
    } else if (name == "career") {
      navigate("/createCareer");
    }
  }

  return (
    <>
    <Box>
      <Card my={10} align="right">
        <CardHeader>
          <Heading
            size="sm"
            fontFamily="karla"
            fontWeight="bold"
            color="#152E7B"
          >
            {" "}
            Welcome to eSpark Admin Portal
          </Heading>
        </CardHeader>
      </Card>

      <SimpleGrid
        py={10}
        px={200}
        spacing={10}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        // width="100% "
      >
        <Card textAlign="center" height="150">
          <CardHeader textAlign="center">
            <Flex justifyContent="center" gap={2}>
              <FaRegListAlt />
              <Heading fontSize={18} fontWeight={500} color="#7F888E">
                Total Blogs
              </Heading>
              <Text fontSize="17" fontWeight={400}>
                {totalBlogs}
              </Text>
            </Flex>

            <Box ml="45%" mt="10">
              <FaArrowAltCircleRight size={20} color="gray" />
            </Box>
          </CardHeader>
        </Card>

        <Card textAlign="center">
          <CardHeader textAlign="center">
            <Flex justifyContent="center" gap={2}>
              <FaBriefcase />
              <Heading fontSize={18} fontWeight={500} color="#7F888E">
                Total Careers
              </Heading>
              <Text fontSize="17">{totalCareers}</Text>
            </Flex>
            <Box ml="45%" mt="10">
              <FaArrowAltCircleRight size={20} color="gray" />
            </Box>
          </CardHeader>
        </Card>

        <Card textAlign="center">
          <CardHeader textAlign="center">
            <Flex justifyContent="center" gap={2}>
              <FaRegListAlt />
              <Heading fontSize={18} fontWeight={500} color="#7F888E">
                Recent Blog
              </Heading>
            </Flex>
            <Text my={2} fontSize="16" color={'#152E7B'}>
              {recentBlog}
            </Text>
            <Box ml="45%" mt="5">
              <FaArrowAltCircleRight size={20} color="gray" />
            </Box>
          </CardHeader>
        </Card>

        <Card textAlign="center">
          <CardHeader textAlign="center">
            <Flex justifyContent="center" gap={2}>
              <FaBriefcase />
              <Heading fontSize={18} fontWeight={500} color="#7F888E">
                Recent career
              </Heading>
            </Flex>
            <Text my={2} fontSize="16" color={'#152E7B'}>
              {recentCareer}
            </Text>
            <Box ml="45%" mt="5">
              <FaArrowAltCircleRight size={20} color="gray" />
            </Box>
          </CardHeader>
        </Card>
      </SimpleGrid>

      <Divider />

      <Grid templateColumns="repeat(4, 1fr)" gap={10} my={50} mx={400}>
        <Card width={400}>
          <CardHeader>
            <Heading size={"sm"} fontWeight={500}> Blog Counts by date</Heading>
          </CardHeader>
          <CardBody mt={5}>
            <BlogAreaChart />
          </CardBody>
        </Card>

        <Card width={400} height={300}>
          <CardHeader>
            <Heading  size={"sm"} fontWeight={500}> Career Counts by date</Heading>
          </CardHeader>
          <CardBody mt={5}>
            <CareerAreaChart />
          </CardBody>
        </Card>
      </Grid>
      </Box>
    </>
  );
};

export default HomePage;
