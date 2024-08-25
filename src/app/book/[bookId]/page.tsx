import React from 'react';
import Image from 'next/image';
import { Book } from '@/types';
import DownloadButton from './components/DownloadButton';


// to get url params you can get like this 
const SingleBookPage = async ({ params }: { params: { bookId: string } }) => {
    console.log('params', params);

    // const book = await fetchSingleBook(params);
    const book = {
        _id: 'anil',
        title: "Think and Grow Rich",
        description: "Amazing Book. Keep learning and keep growing",
        coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        file: "file",
        author: {
          name: "Anil Kumar and N. Hill"
        },
      }

    return (
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-10 px-5 py-10">
            <div className="col-span-2 pr-16 text-primary-950">
                <h2 className="mb-5 text-5xl font-bold leading-[1.1]">{book.title}</h2>
                <span className="font-semibold">by {book.author.name}</span>
                <p className="mt-5 text-lg leading-8">{book.description}</p>

                {/* we cannot use onClick etc on server-components - to achieve this we create a seperate component and then use-client compnent */}
                {/* Best practice: server component are really fast and useful - so try to use it and use client component for only that part of the component which needs client functionality  */}
                <DownloadButton fileLink={book.file} />
            </div>
            <div className="flex justify-end">
                <Image
                    src={book.coverImage}
                    alt={book.title}
                    className="rounded-md border"
                    height={0}
                    width={0}
                    sizes="100vw"
                    style={{ width: 'auto', height: '10rem' }}
                />
            </div>
        </div>
    );
};

async function fetchSingleBook(params: { bookId: string }){
    let book: Book | null = null;
    try {
        const response = await fetch(`${process.env.BACKEND_URL}/books/${params.bookId}`, {
            next: {
                revalidate: 3600,
            },
        });
        if (!response.ok) {
            throw new Error('Error fetching book');
        }
        book = await response.json();
    } catch (err: any) {
        throw new Error('Error fetching book');
    }

    if (!book) {
        throw new Error('Book not found');
    }
    return book;
}

export default SingleBookPage;