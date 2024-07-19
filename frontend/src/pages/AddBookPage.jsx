import React from "react";
import AddBookForm from "../components/AddBookForm";
import Navbar from "../components/Navbar";
import { Flex, Heading } from "@chakra-ui/react";

const AddBookPage = () => {
  return (
    <Flex direction="column" w="100%" mb={20}>
      <Navbar />
      <Heading pt={75} mx="auto" align="center" width="90%">
        Add a new book!
      </Heading>
      <AddBookForm />
    </Flex>
  );
};

export default AddBookPage;
