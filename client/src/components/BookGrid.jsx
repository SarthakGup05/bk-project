import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Chip,
  Rating,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import {
  ShoppingCart,
  Visibility,
  Close as CloseIcon,
} from "@mui/icons-material";
import Button from "./ui/Button";

const BookGrid = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const books = [
    {
      id: 1,
      title: "The Great Adventure",
      author: "Jane Smith",
      price: 24.99,
      image: "/api/placeholder/400/600",
      rating: 4.5,
      category: "Fiction",
      inStock: true,
      description: "An epic tale of discovery and wonder...",
      publisher: "Book House",
      pages: 342,
      isbn: "978-3-16-148410-0",
    },
    {
      id: 2,
      title: "Modern Poetry Collection",
      author: "David Chen",
      image: "/api/placeholder/400/600",
      price: 19.99,
      rating: 4.2,
      category: "Poetry",
      inStock: false,
      description: "A curated collection of modern poetry...",
      publisher: "Poet's Press",
      pages: 128,
      isbn: "978-1-23-456789-0",
    },
  ];

  const handleClose = () => {
    setSelectedBook(null);
  };

  return (
    <div className="p-6 mt-28">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {books.map((book) => (
          <div
            key={book.id}
            className="relative flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex p-4">
              <Link to={`/product-detail`} className="z-10">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-36 h-52 object-cover rounded hover:opacity-90 transition-opacity duration-300"
                />
              </Link>
              <div className="flex flex-col flex-grow ml-4">
                <div className="flex justify-between items-center mb-2">
                  <Chip
                    label={book.category}
                    size="small"
                    color="primary"
                    className="!text-xs !h-6"
                  />
                  {!book.inStock && (
                    <Chip
                      label="Out of Stock"
                      size="small"
                      color="error"
                      className="!text-xs !h-6"
                    />
                  )}
                </div>
                <h2 className="text-lg font-semibold">{book.title}</h2>
                <p className="text-gray-600 text-sm mb-1">by {book.author}</p>
                <Rating
                  value={book.rating}
                  precision={0.5}
                  readOnly
                  size="small"
                />
                <p className="text-lg font-bold text-orange-600 mt-2">
                  ${book.price.toFixed(2)}
                </p>
              </div>
            </div>

            <div className="flex gap-2 p-4 pt-0 mx-auto">
              <Link className="flex-grow" to={`/cart`}>
                <Button
                  className={`flex items-center justify-center w-[250px]  px-4 py-2.5  text-white rounded ${
                    book.inStock
                      ? "bg-orange-600 hover:bg-orange-700"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!book.inStock}
                >
                  <ShoppingCart className="mr-2" />
                  Add to Cart
                </Button>
              </Link>

              <button
                className="flex items-center justify-center w-full px-4 py-2 text-orange-600 border border-orange-600 hover:bg-orange-100 rounded"
                onClick={() => setSelectedBook(book)}
              >
                <Visibility className="mr-2" />
                Quick View
              </button>
            </div>
          </div>
        ))}
      </div>

      <Dialog
        open={!!selectedBook}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        {selectedBook && (
          <>
            <DialogTitle className="flex items-center justify-between">
              Book Details
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <div className="flex gap-6">
                <img
                  src={selectedBook.image}
                  alt={selectedBook.title}
                  className="w-48 h-64 object-cover rounded"
                />
                <div className="flex flex-col flex-grow">
                  <Chip
                    label={selectedBook.category}
                    size="small"
                    color="primary"
                    className="!text-xs !h-6"
                  />
                  <h2 className="text-2xl font-bold mt-2">
                    {selectedBook.title}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    by {selectedBook.author}
                  </p>
                  <Rating
                    value={selectedBook.rating}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
                  <p className="text-xl font-bold text-orange-600 mt-4">
                    ${selectedBook.price.toFixed(2)}
                  </p>
                  <p className="text-gray-700 mt-4">
                    {selectedBook.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <p>
                      <strong>Publisher:</strong> {selectedBook.publisher}
                    </p>
                    <p>
                      <strong>Pages:</strong> {selectedBook.pages}
                    </p>
                    <p>
                      <strong>ISBN:</strong> {selectedBook.isbn}
                    </p>
                    <p>
                      <strong>Status:</strong>{" "}
                      {selectedBook.inStock ? "In Stock" : "Out of Stock"}
                    </p>
                  </div>
                  <Button
                    className={`mt-6 px-6 py-3 text-lg font-medium rounded-lg transition-all duration-300 ${
                      selectedBook?.inStock
                        ? "bg-orange-600 text-white hover:bg-orange-700 shadow-lg hover:shadow-xl"
                        : "bg-gray-400 text-gray-200 cursor-not-allowed"
                    }`}
                    disabled={!selectedBook?.inStock}
                  >
                    <ShoppingCart className="mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </DialogContent>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default BookGrid;
