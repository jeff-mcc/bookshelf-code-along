let books = [
    // {
    //     id: 1,
    //     title: 'some book',
    //     author: 'Adam'
    // }
];
let id = 1;

module.exports = {
    getBooks: (req,res)=>{
        res.status(200).send(books)
    },
    addBook: (req,res)=>{
        const {title,author} = req.body;
        // if(!title || !author){
            // return res.status(500).secnd("Please include both a title and an author")
        // }
        const newBook = {
            id: id,
            title: title,
            author: author,
        }
        id += 1;
        books = [...books,newBook]
        res.status(200).send(books)
    },
    deleteBook: (req,res)=>{
        // console.log(req.params)
        const {id} = req.params;
        books = books.filter(e=>e.id!== +id);
        res.status(200).send(books)
    },
    editBook: (req,res)=>{
        const {title,author} = req.body;
        const {id} = req.params;
        const index = books.findIndex((e)=>e.id === +id)
        const editedBook = {
            id: +id,
            title: title || books[index].title,
            author: author || books[index].title
        }
        // if (index === -1){
        //     return res.status(500).send("could not find that book")
        // }
        books.splice(index,1,editedBook)
        res.status(200).send(books)
    }
}