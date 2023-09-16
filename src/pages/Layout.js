import { Box, Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";

import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  const { isCollapsed } = useSelector((state) => state.collapse);

  return (
    <Grid
      h="100vh"
      templateColumns={`${isCollapsed ? "70px" : "250px"} 1fr`}
      templateRows="auto 1fr"
      position={"relative"}
      bg={"gray.100"}
    >
      <GridItem
        colSpan={1}
        bg="gray.200"
        position="sticky"
        height="100%"
        width="25%"
      >
        <Sidebar isCollapsed={isCollapsed} />
      </GridItem>
      <GridItem
        colSpan={1}
        w="auto"
        position="relative"
        height="100%"
        overflow="auto"
        // mx='5'
      >
        <Navbar />

        <Box mx="10">{children}</Box>
      </GridItem>
    </Grid>
  );
};

export default Layout;