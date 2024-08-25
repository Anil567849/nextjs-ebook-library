import React, { Component } from 'react';
import BookCard from './BookCard';
import { Book } from '@/types';

async function BookList(){
    // data fetching
    // Best Practice: When data in only that Component who uses it. Ex: Don't fetch data in Home and then pass props to this component. Becuase Home will be delaying unnecessarly
    // const books = await fetchBooks();

    const books = await [
                {
                  _id: 'anil',
                  title: "Think and Grow Rich",
                  description: "Amazing Book. Keep learning and keep growing",
                  coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  file: "file",
                  author: {
                    name: "Anil Kumar and N. Hill"
                  },
                },
                {
                  _id: 'anil1',
                  title: "Think and Grow Rich",
                  description: "Amazing Book. Keep learning and keep growing",
                  coverImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  file: "file",
                  author: {
                    name: "Anil Kumar and N. Hill"
                  },
                },
                {
                  _id: 'anil2',
                  title: "Think and Grow Rich",
                  description: "Amazing Book. Keep learning and keep growing",
                  coverImage: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  file: "file",
                  author: {
                    name: "Anil Kumar and N. Hill"
                  },
                }
            ]

    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto mb-10">
            {books.map((book: Book) => (
                <BookCard key={book._id} book={book} />
            ))}
        </div>
    );
};

async function fetchBooks(){
  const response = await fetch(`${process.env.BACKEND_URL}/books`, { cache: 'no-store' });
  if (!response.ok) {
      throw new Error('An error occurred while fetching the books');
  }

  return await response.json();
}

export default BookList;

