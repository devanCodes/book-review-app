import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookDetailPage from './pages/BookDetailPage';
import AddBookPage from "./pages/AddBookPage";
import { Flex } from "@chakra-ui/react";


const App = () => {
  return (
    <Flex className="App" bgGradient='linear(to-r, blue.200, blue.500)' bgSize="cover" minHeight="100vh">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book/:id" element={<BookDetailPage />} />
          <Route path="/add-book" element={<AddBookPage />} />
        </Routes>
      </Router>
    </Flex>
  );
};

export default App;
