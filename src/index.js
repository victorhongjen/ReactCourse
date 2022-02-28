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
  let title = 'The Bicycle Wheel' //create variable and pass in as JS
  let author = 'Jobst Brandt'
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/71CFMKWRYEL._AC_UL320_.gif"
        alt="The Bicycle Wheel Book" 
      />
      <h1>{title}</h1> 
      <h4>{author.toUpperCase()}</h4>
      <p>
        This is a paragraph of the description of the book.<br></br>
        Bla... Bla... Bla...
      </p>
    </article>
  )
}


ReactDom.render(<BookList />, document.getElementById('root'))
