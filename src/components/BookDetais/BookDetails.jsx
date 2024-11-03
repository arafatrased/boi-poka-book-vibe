import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList, getStoredReadList } from "../../Utilities/Utilities";


const BookDetails = () => {
    // const param = useParams();
    // const {bookId} = param;
    const { bookId } = useParams();

    const data = useLoaderData();
    const id = parseInt(bookId);

    const book = data.find(book => book.bookId === id);
    const { image, bookName, author, review, totalPages, category, tags, publisher } = book;

    const handleMarkAsRead = (id) =>{
        addToStoredReadList(id);
    };

    const handleStoredWishList = (id) =>{
        const storedReadList = getStoredReadList();
        if(storedReadList.includes(id)){
            alert('marked as read');
            return
        }
        else{
            addToStoredWishList(id)
        }
        
    }


    return (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 p-6">
            <div>
                <img className="h-screen rounded-md w-full" src={image} alt="" />
            </div>
            <div className="py-3">
                <h1 className="text-5xl font-bold">{bookName}</h1>
                <h3 className="text-2xl font-bold my-3">By: {author}</h3>
                <hr />
                <div className="my-4">
                    <p>{review}</p>
                </div>
                <hr />
                <div className="flex gap-5 my-7">
                    <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline">Mark As Read</button>
                    <button onClick={()=>handleStoredWishList(bookId)} className="btn btn-accent">Add to Wish List</button>
                </div>

            </div>
        </div>
    );
};

export default BookDetails;