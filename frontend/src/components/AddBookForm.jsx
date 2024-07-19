import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Flex, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    published_date: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.author || !formData.published_date) {
      setError("All fields are required");
      return;
    }

    const bookData = {
      ...formData,
      review_text: [], // Initialize with an empty array of reviews
    };

    axios
      .post("http://127.0.0.1:8000/api/books/", bookData)
      .then((response) => {
        console.log("Successfully added book:", response.data);
        setFormData({ title: "", author: "", published_date: "" });
        setError("");
        navigate("/"); // Redirect to the homepage
      })
      .catch((error) => {
        console.error("Failed to add book:", error);
        setError("Failed to add book");
      });
  };

  return (
    <Flex w={["80%", "50%", "30%"]} direction="column" mx="auto">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>
            Title:
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </FormLabel>
          <FormLabel>
            Author:
            <Input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </FormLabel>
          <FormLabel>
            Published Date:
            <Input
              type="date"
              name="published_date"
              value={formData.published_date}
              onChange={handleChange}
              required
            />
          </FormLabel>
          <Button colorScheme="gray" type="submit">
            Add Book
          </Button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </FormControl>
      </form>
    </Flex>
  );
};

export default AddBookForm;
