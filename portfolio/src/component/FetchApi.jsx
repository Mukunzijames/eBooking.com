import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
function FetchApi() {
  
const [data, setData] = useState([])

    const apiGet = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then(response => response.json())
          .then((json) => {  
          console.log(json)
          setData(json)
        
        });
      };
      useEffect(() => {
       apiGet();
      }, [])
      
    
      return (
        <div className='text-center'>
          <h2 className=' font-bold '>Fetch API </h2>
          <button onClick={apiGet} className=' h-10 w-[80px] border-2 bg-amber-300 '>Fetch Data</button>
          {/* <pre>{JSON.stringify(data,null,4)}</pre> */}
          <div>
          <ul>
          {Array.isArray(data) &&
            data.map(item => (
              <li key={item.id}>
                {item.userId}, {item.title}
              </li>
            ))}
        </ul>
          </div>
        </div>

      );
}

export default FetchApi