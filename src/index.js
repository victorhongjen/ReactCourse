import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const firstBook = {
  img: 'https://m.media-amazon.com/images/I/81HqUdZxbLL._AC_UL320_.jpg',
  title: 'Zinn & the Art of Mountain Bike Maintenance',
  author: 'Lennard Zinn',
}

const secondBook = {
  img: 'https://m.media-amazon.com/images/I/71CFMKWRYEL._AC_UL320_.gif',
  title: 'The Bicycle Wheel',
  author: 'Jobst Brandt',
}

const Booklist = () => {
  return(
    <div className='booklist'>
      <Book 
        image = {firstBook.img}
        title = {firstBook.title}
        author = {firstBook.author}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, dolorum recusandae sequi accusamus eveniet quos beatae harum voluptatem consequuntur esse!
        </p>
      </Book>
      <Book 
        image = {secondBook.img}
        title = {secondBook.title}
        author = {secondBook.author}
      />
      <Book />
    </div>
  )
}

const Book = (props) => { //children prop is special 
  return(
    <div className='book'>
      <img src={props.image} />
      <h1>{props.title}</h1>
      <h3>{props.author}</h3>
      {props.children}
    </div>

  )
}

ReactDOM.render(<Booklist />, document.getElementById('root'))