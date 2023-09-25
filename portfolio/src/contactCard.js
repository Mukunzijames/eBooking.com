import React from "react";
import { useState } from "react";

import "./contact.css"
const ContactCard= props =>{
const [showAge, setShowAge] = useState(false)
return (

  <div className="contact-card">
	<img src="https://via.placeholder.com/150" alt="profile" />
	<div className="user-details">
		<p>Name: {props.name}</p>
		<p>Email: {props.email}</p>
		<button onClick={() => setShowAge(!showAge)}> Age </button>
		{showAge && <p>Age: {props.age}</p>}
		
	</div>
</div>
);
};

export default ContactCard;