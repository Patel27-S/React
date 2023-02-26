import BookShow from "./BookShow"

function BookList({books, onDelete}){

    const renderedBooks = books.map((book, index)=>{
        return <BookShow key = {book.id} book={book} onDelete={onDelete}/>
    });

    return (
        <div className="book-list">
            {renderedBooks}
        </div>
    )
}

export default BookList;