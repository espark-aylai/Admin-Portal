import {
  Box,
  CardHeader,
  Card as ChakraCard,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const CustomCard = ({ title, icon, data, onClick }) => {
  return (
    // <Box >
  <ChakraCard
      w="350px"
      height="250px"
      textAlign="center"
      boxShadow="lg"
      borderRadius="lg"
      padding="1rem"
      backgroundColor="white"
      color="#7F888E"
      transition="transform 0.3s ease-in-out"
      _hover={{
        transform: "scale(1.05)",
        backgroundColor: "primary.500",
      }}
      display='flex'
      justifyContent='center'
    >
      <CardHeader textAlign="center" >
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          gap={2}
        >
          <Box as={icon} fontSize="2rem" color="#000000c9" />
          <Heading fontSize="1.2rem" fontWeight="bold" color="primary.500">
            {title}
          </Heading>
          <Text fontSize="1rem" fontWeight="500" color="black">
            {data}
          </Text>
          <Box mt="1rem" textAlign='center' onClick={onClick}>
            <FaArrowAltCircleRight size={20} color="gray" />
          </Box>
        </Flex>
      </CardHeader>
    </ChakraCard>
    // {/* </Box> */}
   
  );
};

export default CustomCard;
