import React from 'react'
import ReactDom from 'react-dom'
//import css

const firstBook = {
    img: 'https://m.media-amazon.com/images/I/71CFMKWRYEL._AC_UL320_.gif',
    title: 'The Bicycle Wheel',
    author: 'Jobst Brandt'
}

const secondBook = {
    img: 'https://m.media-amazon.com/images/I/81HqUdZxbLL._AC_UL320_.jpg',
    title: 'Zinn & the Art of Mountain Bike Maintenance',
    author: 'Lennard Zinn'
}

const Booklist = () => {
    return (
        <>
            <Book
            image={firstBook.img}
            title={firstBook.title}
            author={firstBook.author}
            />
            <Book
            image={secondBook.img}
            title={secondBook.title}
            author={secondBook.author}
            />
            <Book />
        </>
        )
}

const Book = (props) => {
    return(
        <>
            <img>{props.image}</img>
            <h1>{props.title}</h1>
            <h3>{props.author}</h3>
        </>
    )
}

ReactDom.render(<Booklist/>, document.getElementById('root'))