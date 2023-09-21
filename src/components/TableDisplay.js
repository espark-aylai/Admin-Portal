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
  const tableStyles = {
    // borderCollapse: "collapse",
    width: "100%",
    // marginTop: "20px",
  };

  const headerCellStyles = {
    // color: "#002e7b",
    color: "#002e7b",
    // fontWeight: "bold",
    padding: "10px",
    textAlign: "left",
  };

  const bodyRowStyles = (index) => ({
    // background: index % 2 === 0 ? "gray.100" : "blue.50",
    background: index % 2 === 0 ? "#f6f6f6" : "gray.50",
    // borderBottom: "2px solid rgb(255 254 254)",
  });

  // : rgba(255, 255, 255, 0.08)
  // const bodyCellStyles = {
  //   cursor: "pointer",
  //   padding: "10px",
  //   transition: "background 0.3s",
  // };

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
        <Table variant="simple" size={"sm"} style={tableStyles}>
          <Thead background="#c4d8e1">
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
              <Tr key={item.id} bg={index % 2 == 0 ? "#f6f6f6" : "gray.100"}>
                {columns.map((column) => (
                  <Td
                    _hover={{ bg: "#dbeef1" }}
                    transition="ease-in "
                    cursor="pointer"
                    onClick={() => handleClick(item?.id, column.key)}
                    key={column.key}
                  >
                    {item[column.key]}
                  </Td>
                ))}
                <Td cursor="pointer">
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
