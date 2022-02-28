import React from 'react'
import ReactDom from 'react-dom'

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <section>
      <Image />
      <Title />
      <Author />
      <Description />
    </section>
  )
}

const Image = () => {
  return (
  <img
    src="https://m.media-amazon.com/images/I/71CFMKWRYEL._AC_UL320_.gif"
    alt="The Bicycle Wheel Book"
  />
  )
}

const Title = () => {
  return <p>Title</p>
}

const Author = () => {
  return <p>AUTHOR NAME</p>
}

const Description = () => {
  return (
    <p>
      This is a paragraph of the description of the book.<br></br>
      Bla... Bla... Bla...
    </p>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
