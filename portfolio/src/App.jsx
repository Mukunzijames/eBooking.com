import React, { useState } from "react"
import ContactCard from "./contactCard"
const App= () =>{


const [contacts, setContacts] = useState([]);
fetch("https://randomuser.me/api/?results=3")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
return (
<>
{contacts.map(contact =>  (
  <ContactCard
  avatar={contact.picture.large}
  name={contact.name.first + " " + contact.name.last}
  email={contact.email}
  age={contact.dob.age}
/>
))}




</>

  
)
}

export default App;