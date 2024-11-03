import { useLoaderData } from "react-router-dom";
import { getStoredReadList } from "../../Utilities/Utilities";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import Book from "../Book/Book";


const ListedBooks = () => {
    const [readBooks, setReadBooks] = useState([]);

    const allBooks = useLoaderData();

    useEffect(() => {
        const listedReadBooks = getStoredReadList();
        const readBooksInt = listedReadBooks.map(book => parseInt(book));
        console.log(allBooks, readBooksInt);
        const readlistBooks = allBooks.filter(book => readBooksInt.includes(book.bookId));

        setReadBooks(readlistBooks);
    }, [])

    return (
        <div className="w-11/12 mx-auto">
            <h2 className="my-7 text-3xl">Listed Read Books</h2>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className="text-3xl font-bold my-5">Books that I already Read</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 my-5">
                        {
                            readBooks.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                <h2 className="text-3xl font-bold my-5">Books In My Wish List</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ListedBooks;