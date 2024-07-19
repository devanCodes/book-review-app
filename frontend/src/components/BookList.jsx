import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Flex, Heading, List, UnorderedList, ListItem } from "@chakra-ui/react";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/books/")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the books!", error);
      });
  }, []);

  return (
    <Flex direction="column" mt={75} mx="auto">
      <Heading>Current Books</Heading>
      <List>
        <UnorderedList>
          {books.map((book) => (
            <ListItem key={book.id}>
              <Link to={`/book/${book.id}`}>
                {book.title} by {book.author}
              </Link>
            </ListItem>
          ))}
        </UnorderedList>
      </List>
    </Flex>
  );
};

export default BookList;
