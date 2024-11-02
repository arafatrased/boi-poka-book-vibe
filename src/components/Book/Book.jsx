

const Book = ({book}) => {
    const {image, bookName, author, tags, category} = book;

    return (
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
                        tags.map(tag => <button className="btn btn-xs bg-green-100">{tag}</button>)
                    }
                </div>
                <h2 className="card-title">
                {bookName}
                
                </h2>
                <h4>By : {author}</h4>
                
                <div className="card-actions justify-end">
                </div>
                <hr />
                <div className="flex justify-between">
                    
                    <div>
                        <p>{category}</p>
                    </div>
                    <div>
                        <p>5.00 <span>**</span></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;