import React from "react";
import {
  Box,
  Button,
  HStack,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Link, Link as RouterLink } from "react-router-dom";
import { AddIcon, EditIcon } from "@chakra-ui/icons";
import DeleteAlert from "./DeleteAlert";

const TableDisplay = ({
  data,
  columns,
  label,
  route,
  handleClick,
  isCareer,
  editRoute,
}) => {
  return (
    <>
      <HStack justify="flex-end" my={3} color="teal" pr="20">
        <Button colorScheme="teal" variant="solid">
          <Link as={RouterLink} to={route}>
            <Icon as={AddIcon} mr="2" /> {label}
          </Link>
        </Button>
      </HStack>
      <Box>
        <Table variant="simple" size={"sm"}>
          <Thead
            //  background='cyan.50'
            background="#c4d8e1"
            // textColor='#002e7b'
          >
            <Tr>
              {columns?.map((column) => (
                <Th color="#002e7b" key={column.key}>
                  {column.header}
                </Th>
              ))}
              <Th color="#002e7b">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((item, index) => (
              <Tr
                border="2px"
                borderColor="gray.100"
                key={item.id}
                bg={index % 2 === 0 ? "gray.100" : "blue.50"}
              >
                {columns.map((column) => (
                  <Td
                    _hover={{ bg: "#dbeef1" }}
                    cursor="pointer"
                    onClick={() => handleClick(item?.id, column.key)}
                    key={column.key}
                  >
                    {item[column.key]}
                  </Td>
                ))}
                <Td>
                  <DeleteAlert isCareer={isCareer} id={item?.id} />
                  <Link isCareer={isCareer} to={`${editRoute}/${item.id}`}>
                    <Button variant="ghost">
                      {<EditIcon color="green.500" />}
                    </Button>
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

export default TableDisplay;
