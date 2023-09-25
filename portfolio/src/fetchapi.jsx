import React from 'react'

function fetchapi() {

const apiGet = () {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
}
    
  return (
    <div>fetchapi
        <button onClick={apiGet}> fetch</button>
    </div>
  )
}

export default fetchapi