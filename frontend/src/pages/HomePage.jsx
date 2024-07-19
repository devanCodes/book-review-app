import React, { useState } from "react";
import BookList from "../components/BookList";
import Navbar from "../components/Navbar";
import { Flex, Heading, List, UnorderedList, ListItem } from "@chakra-ui/react";

const HomePage = () => {
  const [books, setBooks] = useState([]);

  return (
    <Flex direction="column" w="100%" mb={20}>
      <Navbar />
      <Heading
        fontSize={["2xl", "3xl", "6xl"]}
        fontWeight="extrabold"
        pt={75}
        mt="auto"
        mx="auto"
        align="center"
      >
        Welcome to the Book Reviews Platform
      </Heading>
      <Heading
        mt="auto"
        mx="auto"
        align="center"
        width="90%"
      >
        Feel free to add a book to the list, click under book list to explore reviews of the listed
        books, and even share your own review!
      </Heading>
      <BookList />
      <List>
        <UnorderedList>
          {books.map((book) => (
            <ListItem key={book.id}>
              {book.title} by {book.author}
            </ListItem>
          ))}
        </UnorderedList>
      </List>
    </Flex>
  );
};

export default HomePage;
