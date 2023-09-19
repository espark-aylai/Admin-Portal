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
import CustomCard from "../components/CustomCard";

const HomePage = () => {
  const { data } = useSelector((state) => state.blog);
  const { careerdata } = useSelector((state) => state.career);
  const navigate = useNavigate();
  const totalBlogs = data.length;
  const totalCareers = careerdata?.length;

  const recentBlogIndex = data.length - 1;
  const recentBlog = data[recentBlogIndex]?.title;
  console.log(recentBlog);
  const recentCareerIndex = careerdata.length - 1;
  const recentCareer = careerdata[recentCareerIndex]?.title;
  const recentCareerId = careerdata[recentCareerIndex]?.id;
  const recentBlogId = data[recentBlogIndex]?.id;



  

  const chartData = [
    {
      title: "Blog Counts by date",
      chartComponent: <BlogAreaChart />,
      width: 600,
      height : 400
    },
    {
      title: "Career Counts by date",
      chartComponent: <CareerAreaChart />,
      width: 600,
      height: 400,
    },
  ];

  const cardData = [
    {
      title: "Total Blogs",
      icon: FaRegListAlt,
      data: totalBlogs,
      onClick: () => handleNavigate("total blogs"),
    },
    {
      title: "Total Careers",
      icon: FaBriefcase,
      data: totalCareers,
      onClick: () => handleNavigate("total careers"),
    },
    {
      title: "Recent Blog",
      icon: FaRegListAlt,
      data: recentBlog,
      onClick: () => handleNavigate("recent blogs", recentBlogId),
    },
    {
      title: "Recent Career",
      icon: FaBriefcase,
      data: recentCareer,
      onClick: () => handleNavigate("recent careers", recentCareerId),
    },
  ];

  const handleNavigate = (type, id) => {
    if (type == "total blogs") {
      navigate("/blogs");
    }
    if (type == "total careers") {
      navigate("/careers");
    }
    if (type == "recent blogs") {
      navigate(`/blogs/${id}`);
    }
    if (type == "recent careers") {
      navigate(`careers/${id}`);
    }
  };

  return (
    <>
      <Box w='100%'
      // backgroundColor='gray.200'
      >
        <Card my={10} align="right">
          <CardHeader>
            <Heading
              size="sm"
              fontFamily="karla"
              fontWeight="bold"
              color="#152E7B"
            >
              Welcome to eSpark Admin Portal
            </Heading>
          </CardHeader>
        </Card>

        <SimpleGrid
          py={10}
          spacing={10}
          display="flex"
          justifyContent='space-evenly'
          width="100%"
        >
          {cardData.map((card, index) => (
            <CustomCard
              key={index}
              title={card.title}
              icon={card.icon}
              data={card.data}
              onClick={card.onClick}
            />
          ))}
        </SimpleGrid>

        <Divider />
        <SimpleGrid
          py={10}
          spacing={10}
          display="flex"
          justifyContent="center"
          width="100%"
        >
      {chartData.map((chart, index) => (
        <Card
          key={index}
          title={chart.title}
          width={chart.width}
          height={chart.height || undefined} 
        >
          <CardHeader textAlign='center'>
            <Heading size="sm" fontWeight={500} >
              {chart.title}
            </Heading>
          </CardHeader>
          <CardBody mt={5} display='flex' justifyContent='center'>
            {chart.chartComponent}
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
        
      </Box>
    </>
  );
};

export default HomePage;
