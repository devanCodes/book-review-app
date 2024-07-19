import React from "react";
import { Link } from "react-router-dom";
import { Flex, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex w="100%" top="1rem" align="center" >
      <Link to="/">
        <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
          Home
        </Button>
      </Link>
      <Link to="/add-book">
        <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
          Add Book
        </Button>
      </Link>
    </Flex>
  );
};

export default Navbar;
