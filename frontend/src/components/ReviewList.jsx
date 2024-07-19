import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Flex,
  Text,
  List,
  UnorderedList,
  ListItem,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const ReviewList = ({ bookId }) => {
  const [reviews, setReviews] = useState([]);
  const [bookTitle, setBookTitle] = useState("");
  const [newReview, setNewReview] = useState({ review_text: "", rating: 0 });
  const [formError, setFormError] = useState("");

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/books/${bookId}/`)
      .then((response) => {
        console.log("Book details response:", response.data);
        setBookTitle(response.data.title);
        setReviews(response.data.review_text);
      })
      .catch((error) => {
        console.error("There was an error fetching the book details!", error);
      });
  }, [bookId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!newReview.review_text) {
      setFormError("Review text is required");
      return;
    }
    if (newReview.rating < 0 || newReview.rating > 10) {
      setFormError("Rating must be between 0 and 10");
      return;
    }

    axios
      .patch(`http://127.0.0.1:8000/api/books/${bookId}/`, {
        review_text: [...reviews, newReview],
      })
      .then((response) => {
        console.log("Successfully added review:", response.data);
        setReviews(response.data.review_text);
        setNewReview({ review_text: "", rating: 0 });
        setFormError("");
      })
      .catch((error) => {
        console.error("Failed to add review:", error);
      });
  };

  return (
    <>
      <Flex direction="column" align="center" mt={5}>
        <Text fontSize="2xl">Reviews:</Text>
        <List>
          <UnorderedList>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <ListItem key={index}>
                  {review.rating}/10 - {review.review_text}
                </ListItem>
              ))
            ) : (
              <ListItem>No reviews found for this book.</ListItem>
            )}
          </UnorderedList>
        </List>
      </Flex>
      <Flex w={["80%", "50%", "30%"]} direction="column" mx="auto" mt={5} mb={10}>
        <form onSubmit={handleSubmitReview}>
          <FormControl>
            <FormLabel>
              Review Text:
              <Input
                type="text"
                name="review_text"
                value={newReview.review_text}
                onChange={handleInputChange}
                required
              />
            </FormLabel>
            <FormLabel>
              Rating:
              <Input
                type="number"
                name="rating"
                value={newReview.rating}
                onChange={handleInputChange}
                min="0"
                max="10"
                required
              />
            </FormLabel>
            <Button colorScheme="blue" type="submit">
              Add Review
            </Button>
            {formError && <Text style={{ color: "red" }}>{formError}</Text>}
          </FormControl>
        </form>
      </Flex>
    </>
  );
};

export default ReviewList;

