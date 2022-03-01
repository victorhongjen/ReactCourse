import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

// set up vars
const firstBook = {
  img: 'https://m.media-amazon.com/images/I/71CFMKWRYEL._AC_UL320_.gif',
  title: 'The Bicycle Wheel',
  author: 'Jobst Brandt'
}

const secondBook = {
  img: 'https://m.media-amazon.com/images/I/81HqUdZxbLL._AC_UL320_.jpg',
  title: 'Zinn & the Art of Mountain Bike Maintenance',
  author: ' Lennard Zinn'
}

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book />
      <Book />
    </section>
  )
}

const Book = (props) => {
  console.log(props)
  return (
    <article className="book">
      <img src={props.img}/>
      <h1>{props.title}</h1> 
      <h4>{props.author}</h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
