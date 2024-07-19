import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewList from "../components/ReviewList";
import Navbar from "../components/Navbar";
import { Flex, Heading } from "@chakra-ui/react";

const BookDetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/books/${id}/`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the book!", error);
      });
  }, [id]);

  if (!book) return <div>No book found!</div>;

  return (
    <Flex direction="column" w="100%">
      <Navbar />
      <Heading
        fontSize={["2xl", "3xl", "6xl"]}
        fontWeight="extrabold"
        mx="auto"
        align="center"
      >
        {book.title}
      </Heading>
      <Heading mx="auto" align="center">by {book.author}</Heading>
      <ReviewList bookId={id} bookTitle={book.title} />
    </Flex>
  );
};

export default BookDetailPage;
