import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
const books =[
  {
    id: 1,
    image: 'https://m.media-amazon.com/images/I/81HqUdZxbLL._AC_UL320_.jpg',
    title: 'Zinn & the Art of Mountain Bike Maintenance',
    author: 'Lennard Zinn',
  },
  
  {
    id: 2,
    image: 'https://m.media-amazon.com/images/I/71CFMKWRYEL._AC_UL320_.gif',
    title: 'The Bicycle Wheel',
    author: 'Jobst Brandt',
  },
]

const Booklist = () => {
  return(
    <div className='booklist'>{books.map((book) => {
      return (
        <Book 
        // image = {img} //image comes from Book. img comes from books.map() each book.
        // title = {title}
        // author = {author} 
        key={book.id} book={book} //first book is prop, {book} is what is the book being passed in.
        />
      )
    })}</div>
  )
}

const Book = (props) => { 
  console.log(props)
  const {image, title, author} = props.book
  return(
    <div className='book'>
      <img src={image} />
      <h1>{title}</h1>
      <h3>{author}</h3>
    </div>
  )
}

ReactDOM.render(<Booklist />, document.getElementById('root'))