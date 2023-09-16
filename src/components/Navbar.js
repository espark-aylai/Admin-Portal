import React from "react";
import { Box, Flex, Image, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import esparkLogo from '../assets/espark-logo.png'

const Navbar = (props) => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/");
  };

  return (
    <Flex 
      align="center"
      justifyContent="space-between"
      justify="flex start"
      px={10}
      py={1}
      bg={'#37404A'}
      pos='sticky'
      top='0'
      zIndex={1}
    >
      <Box>
        <Image height="10" src={esparkLogo} alt="E-spark logo" />
      </Box>
      <Box mr="5">
        <Button
          colorScheme="teal"
          variant="ghost"
          color={'#ffffff'}
          // maxW="70vw"
          _hover={{
            color: '#152E7B',
           backgroundColor: 'gray.200'
          }}
          onClick={() => handleClickHome()}
        >
          Home
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;