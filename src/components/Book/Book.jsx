import { Link } from "react-router-dom";


const Book = ({ book }) => {
    const {bookId, image, bookName, author, tags, category } = book;

    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl border-2 border-gray-300">
                <figure className="py-8">
                    <img
                        className="h-[166px] rounded-lg"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="flex gap-3 ">
                        {
                            tags.map((tag,idx) => <button key={idx} className="btn btn-xs bg-green-100">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title font-bold">
                        {bookName}

                    </h2>
                    <h4>By : {author}</h4>

                    <div className="card-actions justify-end flex-grow">
                    </div>
                    <hr />
                    <div className="flex justify-between">

                        <div>
                            <p>{category}</p>
                        </div>
                        <div>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;