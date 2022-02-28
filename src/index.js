import React from 'react'
import ReactDom from 'react-dom'

function Greeting() {
  return (
    <>
    <Greet />
    <Person />
    </>
  )
}

const Person = () => <h2>Victor</h2> // implicit return

const Greet = () => {
  return <h1>Helllllllo!</h1> // explicit return 
}

ReactDom.render(<Greeting />, document.getElementById('root'))
