import {
  Center,
  Flex,
  Icon,
  Link,
  Menu,
  MenuButton,
  Text,
} from "@chakra-ui/react";
import React from "react";
const NavItem = ({ navSize, icon, title, link }) => {
  return (
    <Flex
      mt={30}
      flexDirection={"column"}
      width={"100%"}
      alignItems={navSize ? "center" : "flex-start"}
    >
      <Menu>
        {title && (
          <Link
            href={link}
            p={3}
            borderRadius={8}
            _hover={{ color: "#152E7B", backgroundColor: "gray.200" }}
            width={!navSize && "100%"}
            _active={{ backgroundColor: "#82AAAD" }}
            textAlign={navSize ? "center" : "flex-start"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <MenuButton>
              <Flex alignItems={"center"}>
                {icon && <Icon as={icon} fontSize={"xl"} textAlign={"start"} />}
                {title && (
                  <Text
                    fontSize={20}
                    fontWeight={600}
                    display={navSize ? "none" : "flex"}
                    pl={3}
                  >
                    {title}
                  </Text>
                )}
              </Flex>
            </MenuButton>
          </Link>
        )}
      </Menu>
    </Flex>
  );
};
export default NavItem;
