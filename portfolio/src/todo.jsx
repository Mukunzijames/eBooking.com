import React from 'react';
import { useState } from 'react';
import './App.css';
function App() {
  const [newItem, setNewItem] = useState("");
  const [items,setItems] = useState([]);

  function addItem() {

    if(!newItem){
    alert("enter new item.")
    return;
    }

   const items = {
    id: Math.floor(Math.random() * 5000),
    value: newItem
   }
   setItems (oldList => [...oldList, items]);
   setNewItem("");


  }
  function deleteItem (id){
  const newDelete  = items.filter(items => items.id !==id);
  setItems(newDelete)
  }
  return (
    <>
  <h1 className=" text-center text-3xl font-bold border-b-2 w-1/2 mx-auto mt-3 border-black ">TO DO LIST</h1>
  <div className='flex justify-center items-center pt-[20px] '>
  <input type="text" placeholder="add item ..." value={newItem} onChange={e => setNewItem(e.target.value)} className=" border-2 h-10 w-1/2 mx-auto" />
  </div>
  <div className='text-center mt-2 mr-[645px] '>
  <button className='border-2  bg-black w-10 text-white border-black' onClick={() => addItem ()} >add</button>
  </div>
  <div className='text-center '>
    <ul> 
     {items.map(item => {
     return (
      <li className='border-2 h-12 w-1/2 mx-auto mt-2 flex justify-start bg-gray-400 ' key={item.id}>{item.value} <button onClick={() =>deleteItem(item.id)} className='ml-[480px] border-2  bg-white w-14 h-8 text-black border-white m-2 font-bold rounded-md' >Delete</button></li>
     )

     })}
    </ul>
  </div>
</>
  );
}

export default App;
