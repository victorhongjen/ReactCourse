import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/71CFMKWRYEL._AC_UL320_.gif"
        alt="The Bicycle Wheel Book"
      />
      <h1>Title</h1>
      <p>AUTHOR NAME</p>
      <p>
        This is a paragraph of the description of the book.<br></br>
        Bla... Bla... Bla...
      </p>
    </article>
  )
}


ReactDom.render(<BookList />, document.getElementById('root'))
