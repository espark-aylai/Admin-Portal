import {
  Box,
  CardHeader,
  Card as ChakraCard,
  Flex,
  Heading,
  Text,
  calc,
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
      display="flex"
      justifyContent="center"
      
    >
      <CardHeader textAlign="center">
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
          <Text   
            // fontSize={`calc( 1.5rem / ${data.length * 2}px)`}
            // // fontSize="1.5rem"
            // fontWeight="500"
            // color="black"
            fontSize={`calc(1.5rem / ${data.length * 2}px)`}
            fontWeight="500"
            color="black"
            maxW="100%" 
            wordWrap="break-word"
          >
            {data}
          </Text>
          <Box mt="1rem" textAlign="center" onClick={onClick}>
            <FaArrowAltCircleRight size={20} color="gray" />
          </Box>
        </Flex>
      </CardHeader>
    </ChakraCard>
    // {/* </Box> */}
  );
};

export default CustomCard;
// :root {
//   --base-font-size: 16px; /* You can adjust this as needed */
// }

// /* Apply the font size adjustment to an element with a specific class */
// .title {
//   font-size: var(--base-font-size); /* Set the base font size */
//   white-space: nowrap; /* Prevent text from wrapping to new lines */
//   overflow: hidden; /* Hide any overflowed text */
//   text-overflow: ellipsis; /* Show ellipsis (...) for text that overflows the container */
// }

// /* Use calc() to reduce font size based on the length of the title */
// .title[data-length="long"] {
//   font-size: calc(var(--base-font-size) - 1px); /* Reduce font size for long titles */
// }