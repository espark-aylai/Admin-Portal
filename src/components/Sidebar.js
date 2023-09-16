import React, { useState } from "react";
import { Box, VStack, Text, Flex, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavItem from "./NavItem";
import { FaHouseUser, FaRegCalendarAlt, FaUserAlt, FaProjectDiagram, FaBriefcase, FaRegListAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { handleCollapse } from "../features/collapse/collapseSlice";

const Sidebar = ({ isCollapsed}) => {
  const dispatch = useDispatch()
  return (
    <Flex
      w={isCollapsed ? "70px" : "250px"}
      height="100vh"
      bg={'#37404A'}
      overflow="auto"
      boxShadow={"0 4px 12px rgba(0, 0, 0, 0.05)"}
      justifyContent={"space-between"}
      flexDirection={"column"}
      alignItems={"flex-start"}
    >
      <Flex
        p={isCollapsed ? "12%" : "5%"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        as={"nav"}
        w={"100%"}
        color={'#ffffff'}
      >
        <IconButton
          background={"none"}
          mt={5}
          size={'lg'}
          fontSize={23}
          // _hover={{ Karachi }}
          width={isCollapsed ? "100%" : "auto"}
          icon={<HamburgerIcon />}
          color={'white'}
          onClick={() => dispatch(handleCollapse(!isCollapsed))}
        />
        <NavItem navSize={isCollapsed}  link ={'/blogs'} title="eSpark Blogs" icon={FaRegListAlt} />
        <NavItem navSize={isCollapsed}  link={"/careers"} title="eSpark Careers" icon={FaBriefcase} />
        {/* <NavItem navSize={isCollapsed} title="Clients" icon={FaUserAlt} />
        <NavItem navSize={isCollapsed} title="Projects" icon={FaProjectDiagram} />
        <NavItem navSize={isCollapsed} title="Setting" icon={FaUserAlt} /> */}
      </Flex>
    </Flex>
  );
};
export default Sidebar;

// #DEA19E